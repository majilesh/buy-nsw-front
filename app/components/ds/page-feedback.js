import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  auth: inject(),
  store: inject(),
  router: inject(),
  activated: false,
  feedback: null,

  actions: {
    initiateFeedback() {
      this.set('feedback', this.get('store').createRecord('feedback', {
        issue: '',
        task: '',
        url: window.location.href,
        referer: document.referrer,
        browser: navigator.userAgent,
      }));
      this.set('activated', true);
    },
    sendFeedback() {
      this.set('activated', false);
      this.get('feedback').save();
    }
  },
  didInsertElement() {
    this._super(...arguments);
    let r = this.get("router");
    r.addObserver("currentRouteName", this, "currentRouteNameChanged");

  },
  "currentRouteNameChanged": function(router, propertyName) {
    this.get('store').unloadAll('feedback');
    this.set('feedback', null);
    this.set('activated', false);
   }
});
