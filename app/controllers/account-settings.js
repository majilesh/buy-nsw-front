import Controller from '@ember/controller';
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
        integer: true,
        gt: 2,
      })
    ],
  },
  confirmPassword: {
    validators: [
      validator('confirmation', {
        on: 'newPassword',
        message: '{description} do not match',
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

export default Controller.extend(Validations, {
  ajax: inject(),
  auth: inject(),
  newPassword: '',
  confirmPassword: '',
  currentPassword: '',
  passwordStrength: inject(),

  strength: computed('newPassword', function () {
    const passwordStrength = this.get('passwordStrength');
    return passwordStrength.strengthSync(this.get('newPassword')).score;
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
        controller.get('auth').authenticate();
        controller.transitionToRoute('success', 'account_updated');
      }).catch((error) => {
        if(error.payload.error) {
          controller.set('apiError', error.payload.error);
        }
      }).finally(() => $('.overlay').hide());
    }
  }
});
