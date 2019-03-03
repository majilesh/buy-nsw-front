import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('string'),
  expired: DS.attr('boolean'),
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
  users: DS.hasMany('user'),
  startAmendment: modelAction('start_amendment'),
  revise: modelAction('revise')
});
