import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  caption: computed('status', function () {
    let status = this.get('status');
    return {
      "accepted": "ACCEPTED",
      "declined": "PLEASE REVIEW",
      "editted": "UNSUBMITTED CHANGES",
      "pending": "PENDING REVIEW",
      "pending_locked": "PENDING REVIEW"
    }[status];
  }),
});
