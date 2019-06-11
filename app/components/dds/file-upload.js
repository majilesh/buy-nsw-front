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
    if(!Array.isArray(this.field)){
      this.set('field', []);
    }
    this.store.query('document', {"ids": this.get("field")}).then((response) => {
      this.set('documents', response.toArray());
    });
  },
  uploadFile: task(function * (file) {
    if (this.get('field') == null) {
      this.set('field', []);
    }
    let response = yield file.upload('/api/documents/documents/', {
      headers: { "X-CSRF-Token": this.get('auth.csrfToken') },
      data: { original_filename: file.get('name') }
    }).then((response) => {
      var id = response.body.id;
      this.field.pushObject(id);
      this.store.findRecord('document', id).then((response) =>{
        this.documents.pushObject(response);
      });
    });
  }).maxConcurrency(4).enqueue(),
  actions: {
    removeDocument(index) {
      this.field.removeAt(index);
      this.documents.removeAt(index);
    },
    uploadDocument(file) {
      get(this, 'uploadFile').perform(file);
    }
  }
});
