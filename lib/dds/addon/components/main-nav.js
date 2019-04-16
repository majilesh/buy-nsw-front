import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  currentPath: null,
  auth: inject(),
  router: inject(),
  willRender() {
    this._super(...arguments);
    this.set('currentPath', this.get('router.currentRouteName') );
  }
});
