import Service from '@ember/service';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';

export default Service.extend({
  store: inject(),
  auth: inject(),
  find(id) {
    return this.store.findRecord('document', id);
  },
  load(ids) {
    return this.store.query('document', { "ids": ids });
  },
  upload: task(function * (file, success) {
    let response = yield file.upload('/api/documents/documents/', {
      headers: { "X-CSRF-Token": this.get('auth.csrfToken') },
      data: { original_filename: file.get('name') }
    });
    success(response.body);
  })
});
