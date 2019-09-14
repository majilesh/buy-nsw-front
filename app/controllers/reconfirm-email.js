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
  ajax: inject(),
  auth: inject(),
  email: '',
  apiError: '',

  actions: {
    submit() {
      this.get('overlay').show();
      let controller = this;
      this.get('ajax').request('/api/users/users/resend_confirmation', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          email: this.get('email'),
        }
      }).then((response) => {
        controller.transitionToRoute('success', 'confirmation_sent')
      }).catch((error) => {
        controller.get('auth').authenticateIfUnauthorized(error);
        if(error.payload.error) {
          controller.set('apiError', error.payload.error);
        }
      }).finally(() => this.get('overlay').hide());
    }
  }
});
