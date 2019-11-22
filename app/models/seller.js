import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('string'),
  offersCloud: DS.attr('boolean'),
  offersTelco: DS.attr('boolean'),
  canBeWithdrawn: DS.attr('boolean'),
  lastProfileUpdate: DS.attr('string'),
  steps: computed('live', function() {
    if(this.get('live')) {
      return [
        'eligibility',
        'business-name',
        'contact-detail',
        'company-type',
        'product-category',
        'legal-disclosure',
        'insurance-and-financial-document',
        'complete-application',
      ];
    } else {
      return [
        'eligibility',
        'business-name',
        'contact-detail',
        'company-type',
        'product-category',
        'legal-disclosure',
        'insurance-and-financial-document',
        'company-profile',
        'accreditation-and-license',
        'membership-and-award',
        'complete-application',
      ];
    }
  }),
  declined: computed('status', function() {
    return [
      'changes_requested',
      'amendment_changes_requested'
    ].includes(this.status);
  }),
  statusMessage: computed('status', function() {
    return {
      live: "profile is live",
      amendment_changes_requested: "profile is live but it requires changes",
      amendment_draft: "profile is live but your latest account changes are not submitted",
      amendment_pending: "profile is live and your account changes are under review",
      draft: "supplier application is not submitted",
      pending: "supplier application is under review",
      changes_requested: "supplier application requires changes",
      deactivated: "supplier application is deactivated"
    }[this.status];
  }),
  statusType: computed('status', function() {
    return {
      live: "success",
      amendment_changes_requested: "error",
      amendment_draft: "info",
      amendment_pending: "info",
      draft: "info",
      pending: "info",
      changes_requested: "error",
      deactivated: "warning",
    }[this.status];
  }),
  underEdit: computed('status', function() {
    return [
      'draft',
      'amendment_draft'
    ].includes(this.status);
  }),
  live: computed('status', function() {
    return [
      'live',
      'amendment_pending',
      'amendment_draft',
      'amendment_changes_requested',
    ].includes(this.status);
  }),
  pending: computed('status', function() {
    return [
      'pending',
      'amendment_pending'
    ].includes(this.status);
  }),
  submitable: computed('status', 'steps', 'underEdit', function() {
    // This is just for the old profile page, to be removed
    if(this.get('underEdit')==false) {
      return false;
    }
    for (var key in this.steps) {
      if(![
        'completed',
        'updated',
        'optional',
        'accepted'
      ].includes(this.steps[key].status)) {
        return false;
      }
    }
    return true;
  }),
  discardable: computed('status', function() {
    return 'amendment_draft' == this.status;
  }),
  users: DS.hasMany('user'),
  startAmendment: modelAction('start_amendment'),
  revise: modelAction('revise'),
  submit: modelAction('submit'),
  cancel: modelAction('cancel'),
  withdraw: modelAction('withdraw'),
  deactivate: modelAction('deactivate'),
  activate: modelAction('activate'),
});
