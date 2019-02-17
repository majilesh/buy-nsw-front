import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('seller-dashboard');
  this.route('not-found', { path: '/*path' });
  this.route('products');
  this.route('product', { path: '/products/:product_id'});
  this.route('register-seller');
});

export default Router;
