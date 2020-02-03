import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  tagName: 'nav',
  classNames: ['sapphire-nav'],
  overlay: inject(),
  router: inject(),
  actions: {
    linkClicked(step) {
      if(this.get('underEdit')) {
        this.get('overlay').showError('Please Save or Cancel your changes before leaving this page.');
      }
    }
  }
});
