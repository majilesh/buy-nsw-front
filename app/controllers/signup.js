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
  email: '',
  password: '',
  accountType: '',


  actions: {
    submit() {
      this.get('overlay').show();
      let controller = this;
      this.get('bjax').request('/api/users/users/signup', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          type: this.get('accountType'),
          email: this.get('email'),
          password: this.get('password'),
        }
      }).then(() => {
        controller.transitionToRoute('success', 'signup_confirmation_sent')
      }).catch((error) => {
        controller.set('apiError',error.payload.errors && error.payload.errors[0]);
      }).finally(() => this.get('overlay').hide());
    }
  }
});
