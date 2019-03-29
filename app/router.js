import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('seller-dashboard');
  this.route('products');
  this.route('product', { path: '/products/:product_id'});
  this.route('register-seller');
  this.route('telco-products');
  this.route('telco-form', { path: '/telco-products/:form_key'});
  this.route('buyer-guide');
  this.route('seller-guide');
  this.route('contact');
  this.route('privacy');
  this.route('terms-of-use');
  this.route('accessibility');
  this.route('license');
  this.route('sign-in');
  this.route('sign-up-seller');
  this.route('sign-up-buyer');
  this.route('performance');
  this.route('register-buyer');
  this.route('buyer-dashboard');
  this.route('profile');
  this.route('not-found', { path: '/*path' });
});

export default Router;
