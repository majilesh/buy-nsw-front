import BaseController from './base-controller';
import { computed } from '@ember/object';

export default BaseController.extend({
  step_form: computed('step', function () {
    return 'buyer/step-' + this.get('step');
  }),
});
