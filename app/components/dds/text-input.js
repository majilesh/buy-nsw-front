import Component from '@ember/component';

export default Component.extend({
  actions: {
    focusOut() {
      this.set('hasChange', true);
      if (this.get('focusOut')) {
        this.focusOut();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
