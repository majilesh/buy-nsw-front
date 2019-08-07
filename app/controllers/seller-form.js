import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  steps: [
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
  ],
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
      $('.overlay').show();
      this.set('showError', true);
      let self = this;
      this.model.form.save().then(() => {
        self.model.seller.submit().then(() => {
          self.transitionToRoute('application-success');
        });
      });
    },
    saveContinue() {
      $('.overlay').show();
      this.set('showError', true);
      let controller = this;
      let nextStep = 'complete-application';
      let index = this.steps.indexOf(this.get('stepName'));
      if(index < this.steps.length - 1) {
        nextStep = this.steps[index + 1];
      }
      this.model.form.save().then(()=>{
        controller.transitionToRoute('seller-form', nextStep);
      });
    },
    saveExit() {
      $('.overlay').show();
      this.set('showError', true);
      let controller = this;
      this.model.form.save().then(()=>{
        this.transitionToRoute('supplier-application');
      });
    }
  }
});
