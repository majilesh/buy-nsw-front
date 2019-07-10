import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return  this.store.queryRecord('user', {current: true});
  },
  afterModel(model, transition) {
    if (model.hasSeller) {
      this.transitionTo('supplier-application');
    }
  }
});
