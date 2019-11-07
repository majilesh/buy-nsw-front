import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),
  ajax: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },
  renderTemplate: function() {
    this.render('seller-temp', {
      into: 'seller-temp'
    });
  }
});
