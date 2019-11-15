import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  router: service(),
  overlay: service(),
  actions: {
    back() {
      if(this.get('buyer.employment_status') == 'contractor') {
        this.set('step', 'four');
      } else {
        this.set('step', 'three');
      }
    },
    submit() {
      this.get('overlay').show();
      var self = this;
      this.buyer.save().then(function() {
        self.get('router').transitionTo('buyer-dashboard');
      }).finally(() => this.get('overlay').hide());
    }
  }
});
