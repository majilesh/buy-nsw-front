import Controller from '@ember/controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';
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
  email: '',
  password: '',
  confirmPassword: '',
  passwordStrength: inject(),
  accountType: '',

  strength: computed('password', function () {
    const passwordStrength = this.get('passwordStrength');
    return passwordStrength.strengthSync(this.get('password')).score;
  }),

  actions: {
    submit() {
      $('.overlay').show();
      let controller = this;
      this.get('ajax').request('/api/users/users/signup', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          type: this.get('accountType'),
          email: this.get('email'),
          password: this.get('password'),
        }
      }).then((response) => {
        controller.transitionToRoute('envelope-open')
      }).catch((error) => {
        debugger;
      }).finally(() => $('.overlay').hide());
    }
  }
});