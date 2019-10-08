import BaseController from './base-controller';
import { computed } from '@ember/object';

export default BaseController.extend({
  submitable: computed('model.steps', 'model.form.agreed', function() {
    return this.get('model.seller.steps').every( (key) => {
      let step = this.get('model.steps.'+key.replace(/-/g, '_'));
      return step.status == 'done' || (step.optional && step.status == 'todo') ||
             (key == 'complete-application' && this.get('model.form.agreed'));
    });
  }),
  previousStep: computed('stepName', function () {
    let index = this.get('model.seller.steps').indexOf(this.get('stepName'));
    if(index > 0) {
      return this.get('model.seller.steps')[index - 1];
    }
    return 'eligibility';
  }),
  actions: {
    submit() {
      this.get('overlay').show();
      this.set('showError', true);
      let self = this;
      this.model.form.save().then(() => {
        self.model.seller.submit().then(() => {
          self.transitionToRoute('application-success');
        });
      }).catch((adapterError) => {
        let errors = adapterError.errors[0];
        self.set('model.form.apiErrors', errors);
      }).finally(() => {
        self.get('overlay').hide();
      });
    },
    saveContinue() {
      this.get('overlay').show();
      this.set('showError', true);
      let controller = this;
      let nextStep = 'complete-application';
      let steps = this.get('model.seller.steps');
      let index = steps.indexOf(this.get('stepName'));
      if(index < steps.length - 1) {
        nextStep = steps[index + 1];
      }
      this.model.form.save().then(()=>{
        controller.transitionToRoute('seller-form', nextStep);
      }).catch((adapterError) => {
        let errors = adapterError.errors[0];
        controller.set('model.form.apiErrors', errors);
      }).finally(() => {
        controller.get('overlay').hide();
      });
    },
    saveExit() {
      this.get('overlay').show();
      this.set('showError', true);
      let controller = this;
      this.model.form.save().catch(()=>{}).finally(()=>{
        controller.transitionToRoute('supplier-application');
      });
    }
  }
});
