import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  store: inject(),
  unloadAll() {
    this.get('store').unloadAll('feedback');
  },
  createRecord() {
    return this.get('store').createRecord('feedback', {
      issue: '',
      task: '',
      url: window.location.href,
      referer: document.referrer,
      browser: navigator.userAgent,
    });
  },
  save(feedback) {
    feedback.save();
  }
});
