import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  fileService: inject(),
  overlay: inject(),
  actions: {
    addReference() {
      let references= this.get('form.references');
      references.pushObject({
        first_name: "",
        last_name: "",
        role: "",
        provided_services: "",
        project_description: ""
      });
      this.incrementProperty('form.signal');
    },
    removeReference(index) {
      let members = this.get('form.references');
      members.removeAt(index);
      this.incrementProperty('form.signal');
    },
    addCaseStudy() {
      let caseStudies = this.get('form.case_studies');
      caseStudies.pushObject({
        document_id: null,
        description: ""
      });
      this.incrementProperty('form.signal');
    },
    removeCaseStudy(index) {
      let caseStudies = this.get('form.case_studies');
      caseStudies.removeAt(index);
      this.incrementProperty('form.signal');
    },
  }
});
