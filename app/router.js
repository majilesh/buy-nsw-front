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
  this.route('buyer-guide');
  this.route('seller-guide');
  this.route('contact');
  this.route('privacy');
  this.route('terms-of-use');
  this.route('accessibility');
  this.route('license');
  this.route('sign-in');
  this.route('performance');
  this.route('register-buyer');
  this.route('buyer-dashboard');
  this.route('profile');
  this.route('not-found', { path: '/*path' });
  this.route('team-members');
  this.route('invite-team-member');
  this.route('account-settings');
  this.route('signup', { path: '/signup/:account_type' } );
  this.route('forgot-password');
  this.route('reconfirm-email');
  this.route('success', { path: '/success/:message' } );
  this.route('failure', { path: '/failure/:message' } );

  this.route('cloud-search', { path: '/cloud/:section' } );
  this.route('public-product', { path: '/cloud/product/:product_id' } );

  this.route('cloud-sellers', { path: '/cloud/sellers' } );
  this.route('cloud-seller', { path: '/cloud/seller/:seller_id' } );

  this.route('confirm-invitation', { path: '/confirm-invitation/:confirmation_token' } );
  this.route('reset-password', { path: '/reset-password/:reset_password_token' } );
  this.route('product-order', { path: '/product-order/:product_id' });

  // this.mount('telco');
  this.route('help-page', { path: '/help' });
  this.route('about-page', { path: '/about' });
});

export default Router;
