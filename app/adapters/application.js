import DS from 'ember-data';
import Ember from 'ember';
import { computed } from '@ember/object';
import { underscore } from '@ember/string';
import {inject as service} from '@ember/service';

const { String: { pluralize } } = Ember;

export default DS.RESTAdapter.extend({
  auth: service(),
  // ajaxError: function(jqXHR) {
  //   var error = this._super(jqXHR);
  //   if (jqXHR && jqXHR.status === 401) {
  //     this.get('auth').authenticate();
  //   }
  //   return error;
  // },
  headers: computed('auth.csrfToken', function() {
    return {
      "X-CSRF-Token": this.get('auth.csrfToken'),
    };
  }),
  namespace: '/api',
  pathForType(type) {
    const type_to_api = {
      sellers: 'sellers',
      public_sellers: 'sellers',
      "seller_form/eligibilities": 'sellers',
      "seller_form/insurances": 'sellers',
      products: 'products',
      public_products: 'products',
      product_orders: 'products',
      buyers: 'buyers',
      events: 'events',
      feedbacks: 'events',
      users: 'users',
      members: 'users',
      documents: 'documents',
      // telco_products: 'telco_products',
      // public_telco_products: 'telco_products',
    }
    var type_name = pluralize(underscore(type));
    return type_to_api[type_name] + '/' + type_name;
  }
});
