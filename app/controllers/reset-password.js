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
        message: '{description} does not match',
        description: 'Password confirmation'
      })
    ],
  },
});

export default Controller.extend(Validations, {
  ajax: inject(),
  auth: inject(),
  resetPasswordToken: '',
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
      this.get('ajax').request('/api/users/users/update_lost_password', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          token: this.get('resetPasswordToken'),
          password: this.get('password'),
        }
      }).then((response) => {
        controller.get('auth').authenticate();
        controller.transitionToRoute('success', 'password_updated')
      }).catch((error) => {
        controller.get('auth').authenticateIfUnauthorized(error);
        if(error.payload.error) {
          controller.set('apiError', error.payload.error);
        }
      }).finally(() => $('.overlay').hide());
    }
  }
});
