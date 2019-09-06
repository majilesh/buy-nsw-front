import Component from '@ember/component';
const {$} = Ember;

export default Component.extend({
  actions: {
    cancelClicked() {
      this.get('form').rollbackAttributes();
      this.get('form').reload();
    },
    saveClicked() {
      $('.overlay').show();
      this.get('form').save().finally(() => {
        $('.overlay').hide();
      });
    }
  }
});
