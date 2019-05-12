import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  step_form: computed('step', function () {
    return 'buyer/step-' + this.get('step');
  }),
});
