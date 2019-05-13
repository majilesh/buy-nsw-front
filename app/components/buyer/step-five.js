import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  router: service(),
  actions: {
    back() {
      if(this.get('buyer.employment_status') == 'contractor') {
        this.set('step', 'four');
      } else {
        this.set('step', 'three');
      }
    },
    submit() {
      var self = this;
      this.buyer.save().then(function() {
        self.get('router').transitionTo('buyer-dashboard');
      });
    }
  }
});
