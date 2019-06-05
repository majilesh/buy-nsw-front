import Component from '@ember/component';
import Ember from 'ember';
import { task } from 'ember-concurrency';

const { get, set } = Ember;

export default Component.extend({
  uploadFile: task(function * (file) {
    let response = yield file.upload('/api/documents/documents/upload');
  }).maxConcurrency(3).enqueue(),
  actions: {
    uploadDocument(file) {
      get(this, 'uploadFile').perform(file);
    }
  }
});
