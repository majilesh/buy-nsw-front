import Controller from '@ember/controller';
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
        message: '{description} do not match',
        description: 'Password confirmation'
      })
    ],
  },
});

export default Controller.extend(Validations, {
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
      $('.overlay').show();
      let controller = this;
      this.get('ajax').request('/api/users/users/accept_invitation', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          confirmation_token: this.get('confirmationToken'),
          password: this.get('password'),
        }
      }).then((response) => {
        controller.get('auth').authenticate();
        controller.transitionToRoute('success', 'invitation_accepted')
      }).catch((error) => {
        if(error.payload.error) {
          controller.set('apiError', error.payload.error);
        }
      }).finally(() => $('.overlay').hide());
    }
  }
});
