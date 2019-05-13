import Component from '@ember/component';

export default Component.extend({
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
        self.transitionToRoute('buyer-dashboard');
      });
    }
  }
});
