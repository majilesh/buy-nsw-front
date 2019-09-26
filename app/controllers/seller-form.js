import BaseController from './base-controller';
import { computed } from '@ember/object';

export default BaseController.extend({
  steps: computed('model.seller', function() {
    if(this.get('model.seller.live')) {
      return [
        'eligibility',
        'business-name',
        'contact-detail',
        'company-type',
        'product-category',
        'legal-disclosure',
        'insurance-and-financial-document',
        'complete-application',
      ];
    } else {
      return [
        'eligibility',
        'business-name',
        'contact-detail',
        'company-type',
        'product-category',
        'legal-disclosure',
        'insurance-and-financial-document',
        'company-profile',
        'accreditation-and-license',
        'membership-and-award',
        'complete-application',
      ];
    }
  }),
  submitable: computed('model.steps', 'model.form.agreed', function() {
    return this.get('steps').every( (key) => {
      let step = this.get('model.steps.'+key.replace(/-/g, '_'));
      return step.status == 'done' || (step.optional && step.status == 'todo') ||
             (key == 'complete-application' && this.get('model.form.agreed'));
    });
  }),
  previousStep: computed('stepName', function () {
    let index = this.get('steps').indexOf(this.get('stepName'));
    if(index > 0) {
      return this.get('steps')[index - 1];
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
        this.set('model.form.feedbacks', errors);
      }).finally(() => {
        this.get('overlay').hide();
      });
    },
    saveContinue() {
      this.get('overlay').show();
      this.set('showError', true);
      let controller = this;
      let nextStep = 'complete-application';
      let index = this.steps.indexOf(this.get('stepName'));
      if(index < this.steps.length - 1) {
        nextStep = this.steps[index + 1];
      }
      this.model.form.save().then(()=>{
        controller.transitionToRoute('seller-form', nextStep);
      }).catch((adapterError) => {
        let errors = adapterError.errors[0];
        this.set('model.form.feedbacks', errors);
      }).finally(() => {
        this.get('overlay').hide();
      });
    },
    saveExit() {
      this.get('overlay').show();
      this.set('showError', true);
      let controller = this;
      this.model.form.save().finally(()=>{
        this.transitionToRoute('supplier-application');
      });
    }
  }
});
