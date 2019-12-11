import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { inject } from '@ember/service';

const Validations = buildValidations({
  passwordValid: {
    validators: [
      validator('inline', {
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
          return value == true || "Password is not strong enough";
        }
      }),
    ],
  },
});

export default BaseController.extend(Validations, {
  bjax: inject(),
  auth: inject(),
  resetPasswordToken: '',
  password: '',

  actions: {
    submit() {
      let controller = this;
      this.get('bjax').request('/api/users/users/update_lost_password', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          token: this.get('resetPasswordToken'),
          password: this.get('password'),
        }
      }).then(() => {
        controller.get('auth').reauthenticate();
        controller.transitionToRoute('success', 'password_updated')
      }).catch((error) => {
        controller.set('apiError', error.payload.errors && error.payload.errors[0]);
      });
    }
  }
});
