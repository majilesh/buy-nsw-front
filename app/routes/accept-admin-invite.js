import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
});
