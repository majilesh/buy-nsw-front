import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction/*, resourceAction*/ } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  state: DS.attr('string'),
  status: DS.attr('string'),
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
      draft: ['submit', 'copy', 'cancel'],
      pending_approval: ['withdraw', 'copy'],
      changes_requested: ['revise', 'copy'],
      live: ['start_amendment', 'copy', 'deactivate'],
      deactivated: ['activate', 'copy'],
      amendment_draft: ['submit', 'cancel', 'deactivate', 'copy'],
      amendment_pending: ['withdraw', 'copy', 'deactivate'],
      amendment_changes_requested: ['revise', 'deactivate', 'copy']
    }[this.get('status')];
  })
})
