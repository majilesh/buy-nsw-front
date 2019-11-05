import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('seller-dashboard', { path: '/supplier/dashboard'});
  this.route('products', { path: '/supplier/products'});
  this.route('product', { path: '/supplier/products/:product_id'});
  this.route('register-seller', { path: '/supplier/register'});
  this.route('buyer-guide', { path: '/buyer/guide'});
  this.route('seller-guide', { path: '/supplier/guide'});
  this.route('contact');
  this.route('privacy');
  this.route('terms-of-use');
  this.route('accessibility');
  this.route('license');
  this.route('sign-in', { path: '/login'});
  this.route('performance');
  this.route('register-buyer', { path: '/buyer/register'});
  this.route('buyer-dashboard', { path: '/buyer/dashboard'});
  this.route('seller-profile', { path: '/supplier/profile/:seller_id' } );
  this.route('not-found', { path: '/*path' });
  this.route('404', { path: '/404' });
  this.route('team-members', { path: '/supplier/team'});
  this.route('invite-team-member', { path: '/supplier/team/invite'});
  this.route('account-settings', { path: '/account/settings'});
  this.route('signup', { path: '/signup/:account_type' } );
  this.route('forgot-password');
  this.route('reconfirm-email');
  this.route('success', { path: '/success/:message' } );
  this.route('failure', { path: '/failure/:message' } );

  this.route('cloud-search', { path: '/browse/products/:section' } );
  this.route('public-product', { path: '/browse/product/:product_id' } );

  this.route('cloud-sellers', { path: '/browse/suppliers' } );
  this.route('cloud-seller', { path: '/browse/supplier/:seller_id' } );

  this.route('confirm-invitation', { path: '/confirm-invitation/:confirmation_token' } );
  this.route('reset-password', { path: '/reset-password/:reset_password_token' } );
  this.route('product-order', { path: '/product-order/:product_id' });

  // this.mount('telco');
  this.route('help-page', { path: '/help' });
  this.route('about-page', { path: '/about' });
  this.route('seller-form', { path: '/supplier/forms/:step_name' });
  this.route('supplier-application', { path: '/supplier/application' });
  this.route('application-success', { path: '/application/success'});
  this.route('profile-builder', { path: '/supplier/profile-builder'});
  this.route('access-forbidden', { path: '/forbidden' });
  this.route('seller-account', { path: '/supplier/account/:step_name' });
});

export default Router;
