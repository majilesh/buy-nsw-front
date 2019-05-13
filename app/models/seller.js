import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('string'),
  expired: DS.attr('boolean'),
  offersCloudLive: DS.attr('boolean'),
  offersCloud: DS.attr('boolean'),
  offersTelco: DS.attr('boolean'),
  canBeWithdrawn: DS.attr('boolean'),
  steps: DS.attr(),
  declined: computed('status', function() {
    return [
      'changes_requested',
      'amendment_changes_requested'
    ].includes(this.status);
  }),
  statusMessage: computed('status', function() {
    return {
      live: "is live",
      amendment_changes_requested: "is live but it requires attention",
      amendment_draft: "is live but your latest changes are not submitted",
      amendment_pending: "is live and your changes are under review",
      draft: "is not submitted",
      pending: "is under review",
      changes_requested: "requires attention",
      deactivated: "is deactivated"
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
  pending: computed('status', function() {
    return [
      'pending',
      'amendment_pending'
    ].includes(this.status);
  }),
  submitable: computed('status', 'steps', 'underEdit', function() {
    if(this.underEdit==false) {
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
