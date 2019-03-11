import Component from '@ember/component';
import { inject } from '@ember/service';
import { equal } from '@ember/object/computed';

export default Component.extend({
  auth: inject(),
  currentPath: null,
  onDashboard: equal('currentPath', '/_/seller-dashboard'),
  willRender() {
    this._super(...arguments);
    this.set('currentPath', window.location.pathname);
  }
});
