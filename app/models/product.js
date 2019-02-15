import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  state: DS.attr('string'),
  status: DS.attr('string'),
  submitable: computed('status', 'steps', 'editable', function() {
    if(this.editable===false) {
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
  editable: computed('status', function() {
    return [
      'draft',
      'amendment_draft'
    ].includes(this.status);
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
