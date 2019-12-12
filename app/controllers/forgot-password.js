import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { inject } from '@ember/service';

const Validations = buildValidations({
  email: {
    description: 'Email',
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: "Email address is not valid"
      })
    ]
  },
});

export default BaseController.extend(Validations, {
  bjax: inject(),
  auth: inject(),
  email: '',
  apiError: '',

  actions: {
    submit() {
      let controller = this;
      this.get('bjax').request('/api/users/users/forgot_password', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          email: this.get('email'),
        }
      }).then(() => {
        controller.transitionToRoute('success', 'password_reset_sent')
      }).catch((error) => {
        controller.set('apiError', error.payload.errors && error.payload.errors[0]);
      });
    }
  }
});
