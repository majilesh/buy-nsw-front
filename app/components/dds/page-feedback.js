import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';
import { inject } from '@ember/service';

const Validations = buildValidations({
  'feedback.issue': validator('presence', true),
  'feedback.task': validator('presence', true),
});

export default Component.extend(Validations, {
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
  init() {
    this._super(...arguments);
    let self = this;
    this.router.on('routeWillChange', (transition) => {
      if ( !(self.get('isDestroyed') || self.get('isDestroying')) ) {
        self.get('store').unloadAll('feedback');
        self.set('activated', false);
        self.set('feedback', null);
      }
    })
  }
});
