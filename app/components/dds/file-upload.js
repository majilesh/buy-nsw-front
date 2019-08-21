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
    if(this.get('multiple')) {
      if(!Array.isArray(this.field)){
        this.set('field', []);
      }
      let component = this;
      this.store.query('document', {"ids": this.get("field")}).then((response) => {
        component.set('documents', response.toArray());
      });
    } else {
      let component = this;
      component.set('documents', []);
      if (this.get('field')) {
        this.store.query('document', { "ids": [this.get("field")] }).then((response) => {
          component.set('documents', response.toArray());
        });
      }
    }
  },
  uploadFile: task(function * (file) {
    if (this.get('multiple') && this.get('field') == null) {
      this.set('field', []);
    }
    let response = yield file.upload('/api/documents/documents/', {
      headers: { "X-CSRF-Token": this.get('auth.csrfToken') },
      data: { original_filename: file.get('name') }
    });
    var id = response.body.id;
    if (this.get('multiple')) {
      this.field.pushObject(id);
    } else {
      this.set('field', id);
    }
    let component = this;
    this.store.findRecord('document', id).then((response) =>{
      component.documents.pushObject(response);
      if(component.get('signal') != undefined) {
        component.incrementProperty('signal');
      }
    });
    if(this.get('signal') != undefined) {
      this.incrementProperty('signal');
    }
  }).maxConcurrency(4).enqueue(),
  actions: {
    removeDocument(index) {
      this.set('hasChanged', true);
      if (this.get('multiple')) {
        this.field.removeAt(index);
      } else {
        this.set('field', null);
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
      this.documents.removeAt(index);
    },
    uploadDocument(file) {
      this.set('hasChanged', true);
      get(this, 'uploadFile').perform(file);
    }
  }
});
