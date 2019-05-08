import Controller from '@ember/controller';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

const Validations = buildValidations({
  "model.order.estimatedContractValue": {
    description: 'Estimated value',
    validators: [
      validator('presence', true),
      validator('number', {
        allowString: true,
        integer: true
      })
    ]
  },
  "model.order.contactedSeller": {
    validators: [
      validator('inclusion', {
        in: ['yes', 'no'],
      })
    ],
  },
  "model.order.purchasedCloudBefore": {
    validators: [
      validator('inclusion', {
        in: ['yes', 'no'],
      })
    ],
  },
});

export default Controller.extend(Validations, {
  actions: {
    submit() {
      $('.overlay').show();
      this.set('showValueError', true);
      let controller = this;
      this.model.order.save().then(function() {
        controller.transitionToRoute('success', 'product_order')
      }).catch((error) => {
      //  if(error.payload.error) {
      //    controller.set('apiError', error.payload.error);
      //  }
      }).finally(() => $('.overlay').hide());
    }
  }
});
