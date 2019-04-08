import Controller from '@ember/controller';
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

export default Controller.extend(Validations, {
  ajax: inject(),
  auth: inject(),
  email: '',

  actions: {
    submit() {
      $('.overlay').show();
      let controller = this;
      this.get('ajax').request('/api/users/users/forgot_password', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          email: this.get('email'),
        }
      }).then((response) => {
        controller.transitionToRoute('index', 'password_reset_sent')
      }).catch((error) => {
        debugger;
      }).finally(() => $('.overlay').hide());
    }
  }
});
