import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

const Validations = buildValidations({
  strength: {
    validators: [
      validator('number', {
        integer: true,
        gt: 2,
      })
    ],
  },
  confirmPassword: {
    validators: [
      validator('confirmation', {
        on: 'password',
        message: '{description} does not match',
        description: 'Password confirmation'
      })
    ],
  },
});

export default BaseController.extend(Validations, {
  ajax: inject(),
  auth: inject(),
  confirmationToken: '',
  password: '',
  confirmPassword: '',
  passwordStrength: inject(),

  strength: computed('password', function () {
    const passwordStrength = this.get('passwordStrength');
    return passwordStrength.strengthSync(this.get('password')).score;
  }),

  actions: {
    submit() {
      this.get('overlay').show();
      let controller = this;
      this.get('ajax').request('/api/users/users/accept_invitation', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          token: this.get('confirmationToken'),
          password: this.get('password'),
        }
      }).then((response) => {
        controller.get('auth').reauthenticate();
        controller.transitionToRoute('success', 'invitation_accepted')
      }).catch((error) => {
        controller.get('auth').authenticateIfUnauthorized(error);
        if(error.payload.error) {
          controller.set('apiError', error.payload.error);
        }
      }).finally(() => this.get('overlay').hide());
    }
  }
});
