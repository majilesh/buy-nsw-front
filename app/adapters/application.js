import DS from 'ember-data';
import Ember from 'ember';
import { computed } from '@ember/object';
import { underscore } from '@ember/string';
import {inject as service} from '@ember/service';

const { String: { pluralize } } = Ember;

export default DS.RESTAdapter.extend({
  auth: service(),
  router: service(),
  overlay: service(),
  handleResponse(status, headers, payload, requestData) {
    if (status == 401) {
      this.get('auth').reauthenticate();
      this.get('auth').transitToSignin();
    }
    if (status == 403) {
      this.get('auth').reauthenticate();
      this.get('overlay').showCsrfError();
    }
    if (status == 404) {
      this.get('router').transitionTo("404");
    }
    if (status == 405) {
      this.get('router').transitionTo("access-forbidden");
    }
    if (status == 422 && payload.errors && payload.errors[0].alert) {
      this.get('overlay').showError(payload.errors[0].alert);
    }
    return this._super(...arguments);
  },

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

      'seller-profile/essential-information': 'sellers/seller_profile_form/essential_information',
      'seller-profile/contact-detail': 'sellers/seller_profile_form/contact_detail',
      'seller-profile/reputation-and-distinction': 'sellers/seller_profile_form/reputation_and_distinction',
      'seller-profile/capability-and-experty': 'sellers/seller_profile_form/capability_and_experty',
      'seller-profile/reference-and-case-study': 'sellers/seller_profile_form/reference_and_case_study',
      'seller-profile/government-credential': 'sellers/seller_profile_form/government_credential',
      'seller-profile/scheme-and-panel': 'sellers/seller_profile_form/scheme_and_panel',
      'seller-profile/team-member': 'sellers/seller_profile_form/team_member',
      'seller-profile/promotional-video': 'sellers/seller_profile_form/promotional_video',

      'seller-account/business-address': 'sellers/seller_account_form/business_address',
      'seller-account/business-category': 'sellers/seller_account_form/business_category',
      'seller-account/business-name-and-abn': 'sellers/seller_account_form/business_name_and_abn',
      'seller-account/company-type-and-size': 'sellers/seller_account_form/company_type_and_size',
      'seller-account/contact-detail': 'sellers/seller_account_form/contact_detail',
      'seller-account/financial-document': 'sellers/seller_account_form/financial_document',
      'seller-account/insurance-document': 'sellers/seller_account_form/insurance_document',
      'seller-account/legal-disclosure': 'sellers/seller_account_form/legal_disclosure',

      'product': 'products/products',
      'public-product': 'products/public_products',
      'product-order': 'products/product_orders',
      'buyer': 'buyers/buyers',
      'event': 'events/events',
      'feedback': 'events/feedbacks',
      'user': 'users/users',
      'member': 'users/members',
      'document': 'documents/documents',
      'avatar': 'documents/avatars',
      // telco-product: 'telco_products/telco_products',
      // public-telco-product: 'telco_products/public_telco_products',
    }
    return type_to_api[type];
  }
});
