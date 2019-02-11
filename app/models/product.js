import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction/*, resourceAction*/ } from "ember-custom-actions";

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  state: DS.attr('string'),
  status: DS.attr('string'),
  steps: DS.hasMany(),
  deactivate: modelAction('deactivate'),
  activate: modelAction('activate'),
  validActions: computed('status', function(){
    return {
      started: [],
      archived: [],
      draft: ['submit', 'copy', 'discard', 'cancel'],
      pending_approval: ['withdraw', 'copy'],
      changes_requested: ['revise', 'discard', 'copy'],
      live: ['start_amendment', 'copy', 'deactivate'],
      deactivated: ['activate', 'discard', 'copy'],
      amendment_draft: ['submit', 'cancel', 'deactivate', 'copy'],
      amendment_pending: ['withdraw', 'copy', 'deactivate'],
      amendment_changes_requested: ['revise', 'deactivate', 'copy']
    }[this.get('status')];
  })
})