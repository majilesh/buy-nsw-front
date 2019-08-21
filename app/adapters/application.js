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
      'seller': 'sellers/sellers',
      'public-seller': 'sellers/public_sellers',
      'seller-profile': 'sellers/seller_profiles',
      'seller-form/eligibility': 'sellers/seller_form/eligibility',
      'seller-form/business-name': 'sellers/seller_form/business_name',
      'seller-form/contact-detail': 'sellers/seller_form/contact_detail',
      'seller-form/company-type': 'sellers/seller_form/company_type',
      'seller-form/product-category': 'sellers/seller_form/product_category',
      'seller-form/legal-disclosure': 'sellers/seller_form/legal_disclosure',
      'seller-form/insurance-and-financial-document': 'sellers/seller_form/insurance_and_financial_document',
      'seller-form/company-profile': 'sellers/seller_form/company_profile',
      'seller-form/membership-and-award': 'sellers/seller_form/membership_and_award',
      'seller-form/accreditation-and-license': 'sellers/seller_form/accreditation_and_license',
      'seller-form/complete-application': 'sellers/seller_form/complete_application',
      'product': 'products/products',
      'public-product': 'products/public_products',
      'product-order': 'products/product_orders',
      'buyer': 'buyers/buyers',
      'event': 'events/events',
      'feedback': 'events/feedbacks',
      'user': 'users/users',
      'member': 'users/members',
      'document': 'documents/documents',
      // telco-product: 'telco_products/telco_products',
      // public-telco-product: 'telco_products/public_telco_products',
    }
    return type_to_api[type];
  }
});
