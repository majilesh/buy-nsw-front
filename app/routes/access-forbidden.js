import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate: function() {
    this.render('access-forbidden', {
      into: 'access-forbidden'
    });
  },
});
