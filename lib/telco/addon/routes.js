import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('telco-products');
  this.route('telco-form', { path: '/telco-products/:form_key'});
  this.route('tpa');
  this.route('service-tower', { path: '/tpa/:service_tower' });
  this.route('tpa-product', { path: '/tpa-product/:id' } );
});
