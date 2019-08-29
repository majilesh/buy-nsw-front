import Service from '@ember/service';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),
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

  uploadAvatar: task(function * (blob, fileName, contentType, success) {
    const formData = new FormData();
    formData.append('file', blob, fileName);
    formData.append('original_filename', fileName);
    formData.append('Content-Type', contentType);
    let response = this.get('ajax').request('/api/documents/avatars/', {
      method: 'POST',
      headers: { "X-CSRF-Token": this.get('auth.csrfToken') },
      contentType: false,
      processData: false,
      data: formData,
    }).then((response) => {
      success(response);
    });
  }).maxConcurrency(4).enqueue(),

  uploadDocument: task(function * (file, success) {
    let response = yield file.upload('/api/documents/documents/', {
      headers: { "X-CSRF-Token": this.get('auth.csrfToken') },
      data: { original_filename: file.get('name') }
    });
    success(response.body);
  }).maxConcurrency(4).enqueue()
});
