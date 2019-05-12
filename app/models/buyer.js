import DS from 'ember-data';
import { computed } from '@ember/object';
import { modelAction } from "ember-custom-actions";

export default DS.Model.extend({
  state: DS.attr('string'),
  approved: computed('state', function() {
    return this.get('state') == 'approved';
  }),
  pendingApproval: computed('state', function() {
    return this.get('state') == 'awaiting_manager_approval';
  }),
  underReview: computed('state', function() {
    return this.get('state') == 'awaiting_assignment' ||
           this.get('state') == 'ready_for_review';
  }),
  draft: computed('state', function() {
    return this.get('state') == 'created';
  }),
  name: DS.attr('string'),
  organisation: DS.attr('string'),
  application_body: DS.attr('string'),
  cloud_purchase: DS.attr('string'),
  contactable: DS.attr('string'),
  contact_number: DS.attr('string'),
  employment_status: DS.attr('string'),
  manager_name: DS.attr('string'),
  manager_email: DS.attr('string'),
});
