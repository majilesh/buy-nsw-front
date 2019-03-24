import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  currentPath: null,
  auth: inject(),
  willRender() {
    this._super(...arguments);
    this.set('currentPath', window.location.pathname);
  }
});
