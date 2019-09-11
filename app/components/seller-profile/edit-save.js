import Component from '@ember/component';
const {$} = Ember;

export default Component.extend({
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
      $('.overlay').show();
      let component = this;
      this.get('form').save().then(() => {
        component.set('underEdit', false);
      }).finally(() => {
        $('.overlay').hide();
      });
    }
  }
});
