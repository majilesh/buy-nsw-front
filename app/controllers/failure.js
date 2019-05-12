import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  icon: computed('message', function () {
    return {
      email_confirmation: 'times',
      manager_approved: 'times',
    }[this.get('message')] || 'bomb';
  }),
  title: computed('message', function () {
    return {
      email_confirmation: 'Email confirmation failed',
      manager_approved: 'Employee confirmation failed',
    }[this.get('message')] || 'Something went wrong';
  }),
  description: computed('message', function () {
    return {
      email_confirmation: 'To receive more information please contact us.',
      manager_approved: 'To receive more information please contact us.',
    }[this.get('message')] || 'You probably entered an incorrect success message';
  }),
});
