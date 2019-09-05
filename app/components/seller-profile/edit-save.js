import Component from '@ember/component';
const {$} = Ember;

export default Component.extend({
  actions: {
    cancelClicked() {
      this.get('form').rollbackAttributes();
    },
    saveClicked() {
      $('.overlay').show();
      this.get('form').save().finally(() => {
        $('.overlay').hide();
      });
    }
  }
});
