import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  overlay: inject(),
  actions: {
    editClicked() {
      this.set('underEdit', true);
    },
    cancelClicked() {
      this.get('form').rollbackAttributes();
      let component = this;
      this.get('form').reload().then(() => {
        component.set('underEdit', false);
      });
    },
    saveClicked() {
      this.get('overlay').show();
      let component = this;
      this.get('form').save().then(() => {
        component.set('underEdit', false);
      }).finally(() => {
        this.get('overlay').hide();
      });
    }
  }
});
