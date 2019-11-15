import { computed } from '@ember/object';
import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

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
  passwordValid: {
    validators: [
      validator('inline', {
        validate(value, options, model, attributes) {
          return value == true || "Password is not strong enough";
        }
      }),
    ],
  },
});

export default DS.Model.extend(Validations, {
  passwordValid: true,
  email: DS.attr('string'),
  confirmed: DS.attr('boolean'),
  newPassword: DS.attr('string'),
  roles: DS.attr(),
  seller_id: DS.attr('number'),
  seller: DS.belongsTo('seller'),
  hasSeller: computed('seller', function() {
    return this.seller != null;
  })
});
