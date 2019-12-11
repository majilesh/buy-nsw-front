import Service from '@ember/service';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';

export default Service.extend({
  bjax: inject(),
  store: inject(),
  auth: inject(),

  find(id) {
    return this.store.findRecord('document', id);
  },

  loadAvatar(avatarId) {
    return this.store.findRecord('avatar', avatarId);
  },

  loadDocument(ids) {
    return this.store.query('document', { "ids": ids });
  },

  uploadAvatar: task(function * (blob, fileName, contentType, success, lastly) {
    const formData = new FormData();
    let self = this;
    formData.append('file', blob, fileName);
    formData.append('original_filename', fileName);
    formData.append('Content-Type', contentType);
    yield this.get('bjax').request('/api/documents/avatars/', {
      method: 'POST',
      headers: { "X-CSRF-Token": self.get('auth.csrfToken') },
      contentType: false,
      processData: false,
      data: formData,
    }).then((response) => {
      success(response);
    }).finally(lastly);
  }).maxConcurrency(4).enqueue(),

  uploadDocument: task(function * (file, success, lastly) {
    let self = this;
    yield file.upload('/api/documents/documents/', {
      headers: { "X-CSRF-Token": self.get('auth.csrfToken') },
      data: { original_filename: file.get('name') }
    }).then((response) => {
      success(response.body);
    }).catch((error) => {
      self.get('auth').authenticateIfUnauthorized(error);
    }).finally(lastly);
  }).maxConcurrency(4).enqueue()
});
