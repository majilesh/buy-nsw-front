import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';
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
  strength: {
    validators: [
      validator('number', {
        presence: false,
        integer: true,
        gt: 2,
      })
    ],
  },
  confirmPassword: {
    validators: [
      validator('confirmation', {
        on: 'newPassword',
        message: '{description} doesn\'t match',
        description: 'Password confirmation'
      })
    ],
  },
  currentPassword: {
    validators: [
      validator('presence', true),
    ]
  },
});

export default BaseController.extend(Validations, {
  ajax: inject(),
  auth: inject(),
  newPassword: '',
  confirmPassword: '',
  currentPassword: '',
  passwordStrength: inject(),

  strength: computed('newPassword', function () {
    if(this.get('newPassword')) {
      const passwordStrength = this.get('passwordStrength');
      return passwordStrength.strengthSync(this.get('newPassword')).score;
    } else {
      return null;
    }
  }),

  actions: {
    submit() {
      $('.overlay').show();
      let controller = this;
      this.get('ajax').request('/api/users/users/update_account', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          email: this.get('model.email'),
          newPassword: this.get('newPassword'),
          currentPassword: this.get('currentPassword'),
        }
      }).then((response) => {
        controller.get('auth').reauthenticate();
        controller.transitionToRoute('success', 'account_updated');
      }).catch((error) => {
        controller.get('auth').authenticateIfUnauthorized(error);
        if(error.payload.error) {
          controller.set('apiError', error.payload.error);
        }
      }).finally(() => $('.overlay').hide());
    }
  }
});
