import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  renderTemplate: function() {
    this.render('access-forbidden', {
      into: 'access-forbidden'
    });
  },
});
