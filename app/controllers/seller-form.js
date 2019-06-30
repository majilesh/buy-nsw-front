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
  previousStep: computed('stepName', function () {
    let index = this.get('steps').indexOf(this.get('stepName'));
    if(index > 0) {
      return this.get('steps')[index - 1];
    }
    return 'eligibility';
  }),
  actions: {
    submit() {
      this.set('showError', true);
      this.model.form.save();
    },
    saveContinue() {
      this.set('showError', true);
      this.model.form.save();
      let index = this.steps.indexOf(this.get('stepName'));
      let nextStep = 'complete-application';
      if(index < this.steps.length - 1) {
        nextStep = this.steps[index + 1];
      }
      this.transitionToRoute('seller-form', nextStep);
    },
    saveExit() {
      this.set('showError', true);
      this.model.form.save();
    }
  }
});
