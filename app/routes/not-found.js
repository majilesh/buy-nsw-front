import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate: function() {
    this.render('not-found', {
      into: 'not-found'
    });
  },
});
