import Component from '@ember/component';
import Ember from 'ember';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';

const { get, set } = Ember;

export default Component.extend({
  store: inject(),
  auth: inject(),
  documents: [],
  didReceiveAttrs() {
    this._super(...arguments);
    this.store.query('document', {"ids": this.get("documentIds")}).then((response) => {
      this.set('documents', response.toArray());
    });
  },
  uploadFile: task(function * (file) {
    if (this.get('documentIds') == null) {
      this.set('documentIds', []);
    }
    let response = yield file.upload('/api/documents/documents/', {
      headers: { "X-CSRF-Token": this.get('auth.csrfToken') },
      data: { original_filename: file.get('name') }
    }).then((response) => {
      var id = response.body.id;
      this.documentIds.pushObject(id);
      this.store.findRecord('document', id).then((response) =>{
        this.documents.pushObject(response);
      });
    });
  }).maxConcurrency(4).enqueue(),
  actions: {
    removeDocument(index) {
      this.documentIds.removeAt(index);
      this.documents.removeAt(index);
    },
    uploadDocument(file) {
      get(this, 'uploadFile').perform(file);
    }
  }
});
