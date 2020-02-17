import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate: function() {
    this.render('styleguide-dashboard', {
      into: 'styleguide-dashboard'
    });
  }
});
