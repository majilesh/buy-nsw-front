import DS from 'ember-data';
import Ember from 'ember';
import { computed } from '@ember/object';
import { underscore } from '@ember/string';

const { String: { pluralize } } = Ember;

export default DS.RESTAdapter.extend({
  headers: computed(function() {
    return {
      "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").getAttribute("content")
    };
  }),
  namespace: '/api',
  pathForType(type) {
    var type_name = pluralize(underscore(type));
    return type_name + '/' + type_name;
  }
});
