import BaseController from './base-controller';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  "model.order.estimatedContractValue": {
    description: 'Estimated value',
    validators: [
      validator('presence', true),
      validator('number', {
        message: "Please enter a number only - no symbols, spaces or commas",
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

export default BaseController.extend(Validations, {
  actions: {
    submit() {
      this.get('overlay').show();
      this.set('showValueError', true);
      let controller = this;
      this.model.order.set('product_id', this.model.product.get('id'));
      this.model.order.save().then(function() {
        controller.transitionToRoute('success', 'product_order')
      }).catch((adapterError) => {
        controller.set('apiError', adapterError.errors && adapterError.errors[0]);
      }).finally(() => this.get('overlay').hide());
    }
  }
});
