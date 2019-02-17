import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  state: DS.attr('string'),
  status: DS.attr('string'),
  submitable: computed('status', 'steps', 'underEdit', function() {
    if(this.underEdit===false) {
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
  underEdit: computed('status', function() {
    return [
      'draft',
      'amendment_draft'
    ].includes(this.status);
  }),
  pending: computed('status', function() {
    return [
      'pending_approval',
      'amendment_pending'
    ].includes(this.status);
  }),
  changesRequested: computed('status', function() {
    return [
      'changes_requested',
      'amendment_changes_requested'
    ].includes(this.status);
  }),
  live: computed('status', function() {
    return [
      'live',
      'amendment_pending',
      'amendment_draft',
      'amendment_changes_requested'
    ].includes(this.status);
  }),
  friendlyStatus: computed('status', function() {
    return {
      live: "Approved",
      amendment_changes_requested: "Changes requested",
      amendment_draft: "Unsubmitted changes",
      amendment_pending: "Under review",
      draft: "Not submitted",
      pending_approval: "Under review",
      changes_requested: "Changes requested",
      deactivated: "Deactivated"
    }[this.status];
  }),
  steps: DS.attr(),
  submit: modelAction('submit'),
  copy: modelAction('copy'),
  cancel: modelAction('cancel'),
  withdraw: modelAction('withdraw'),
  revise: modelAction('revise'),
  start_amendment: modelAction('start_amendment'),
  deactivate: modelAction('deactivate'),
  activate: modelAction('activate'),
  validActions: computed('status', function(){
    return {
      started: [],
      archived: [],
      draft: ['copy', 'cancel'],
      pending_approval: ['withdraw', 'copy'],
      changes_requested: ['revise', 'copy'],
      live: ['start_amendment', 'copy', 'deactivate'],
      deactivated: ['activate', 'copy'],
      amendment_draft: ['cancel', 'deactivate', 'copy'],
      amendment_pending: ['withdraw', 'copy', 'deactivate'],
      amendment_changes_requested: ['revise', 'deactivate', 'copy']
    }[this.get('status')];
  })
})
