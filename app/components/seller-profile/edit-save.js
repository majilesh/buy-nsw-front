import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  overlay: inject(),
  actions: {
    editClicked() {
      this.set('underEdit', true);
    },
    cancelClicked() {
      this.get('overlay').show();
      this.get('form').set('apiErrors', null);
      this.get('form').rollbackAttributes();
      let component = this;
      this.get('form').reload().then(() => {
        component.set('underEdit', false);
      }).finally(() => {
        component.get('overlay').hide();
      });
    },
    saveClicked() {
      this.get('overlay').show();
      let component = this;
      let form = this.get('form');
      form.save().then(() => {
        component.set('underEdit', false);
      }).catch((adapterError) => {
        let errors = adapterError.errors[0];
        form.set('showError', true);
        form.set('apiErrors', errors);
      }).finally(() => {
        component.get('overlay').hide();
      });
    }
  }
});
