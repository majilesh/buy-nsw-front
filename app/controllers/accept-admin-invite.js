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
  invitationToken: '',
  password: '',

  actions: {
    submit() {
      let controller = this;
      this.get('bjax').request('/api/users/users/confirm_admin_invitation', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          token: this.get('invitationToken'),
          password: this.get('password'),
        }
      }).then(() => {
        controller.get('auth').reauthenticate();
        controller.transitionToRoute('success', 'invitation_accepted');
      }).catch((error) => {
        controller.set('apiError', error.payload.errors && error.payload.errors[0]);
      });
    }
  }
});
