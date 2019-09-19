import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';

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
  }
});

export default BaseController.extend(Validations, {
  showError: false,
  actions: {
    invite() {
      this.set('showError', true);
      var self = this;
      this.get('overlay').show();
      let controller = this;

      this.get('model').save().then(function() {
        self.set('invitationErrors', null);
        self.transitionToRoute('team-members');
      }).catch(function() {
        self.set('invitationErrors', 'This email address is already taken!');
        window.scrollTo(0,230);
      }).finally(function() {
        controller.get('overlay').hide();
      });
    }
  }
});
