import DS from 'ember-data';
import Ember from 'ember';
import { computed } from '@ember/object';
import { underscore } from '@ember/string';
import {inject as service} from '@ember/service';

const { String: { pluralize } } = Ember;

export default DS.RESTAdapter.extend({
  auth: service(),
  headers: computed('auth.csrfToken', function() {
    return {
      "X-CSRF-Token": this.get('auth.csrfToken'),
    };
  }),
  namespace: '/api',
  pathForType(type) {
    var type_name = pluralize(underscore(type));
    return type_name + '/' + type_name;
  }
});
