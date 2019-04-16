import Controller from '@ember/controller';
import { buildValidations, validator } from 'ember-cp-validations';
import Ember from 'ember';
const {$} = Ember;

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

export default Controller.extend(Validations, {
  showError: false,
  actions: {
    invite() {
      this.set('showError', true);
      var self = this;
      $('.overlay').show();

      this.get('model').save().then(function() {
        self.set('invitationErrors', null);
        self.transitionToRoute('team-members');
      }).catch(function() {
        self.set('invitationErrors', 'The email address is already taken!');
        window.scrollTo(0,230);
      }).finally(function() {
        $('.overlay').hide();
      });
    }
  }
});