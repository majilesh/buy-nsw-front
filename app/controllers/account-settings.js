import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { inject } from '@ember/service';

const Validations = buildValidations({
  'model.email': {
    description: 'Email',
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: "Please enter a valid email address"
      })
    ]
  },
  passwordValid: {
    validators: [
      validator('inline', {
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
          return value == true || "password is not strong enough";
        }
      }),
    ],
  },
  currentPassword: {
    validators: [
      validator('presence', true),
    ]
  },
});

export default BaseController.extend(Validations, {
  bjax: inject(),
  auth: inject(),
  newPassword: '',
  currentPassword: '',

  actions: {
    submit() {
      this.get('overlay').show();
      let controller = this;
      this.get('bjax').request('/api/users/users/update_account', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          email: this.get('model.email'),
          newPassword: this.get('newPassword'),
          currentPassword: this.get('currentPassword'),
        }
      }).then(() => {
        controller.get('auth').reauthenticate();
        controller.transitionToRoute('success', 'account_updated');
      }).catch((error) => {
        controller.set('apiError', error.payload.errors && error.payload.errors[0]);
      });
    }
  }
});
