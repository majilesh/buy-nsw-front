import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  steps: [
    'eligibility',
    'business-name',
    'contact-detail',
    'company-type',
    'legal-disclosure',
    'financial-statement',
    'insurance',
    'company-profile',
    'complete-application',
  ],
  submitable: computed('model.steps', function() {
    return this.get('steps').every( (key) => {
      let step = this.get('model.steps.'+key.replace('-', '_'));
      return step.status == 'done' || step.optional;
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
