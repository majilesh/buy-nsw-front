import Component from '@ember/component';

export default Component.extend({
  hidePassword: true,
  actions: {
    togglePassword() {
      this.toggleProperty('hidePassword');
    }
  }
});
