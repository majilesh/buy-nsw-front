import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  fileService: inject(),
  actions: {
    addCredential() {
      let government_credentials = this.get('form.government_credentials');
      government_credentials.pushObject({
        first_name: "",
        last_name: "",
        role: "",
        provided_services: "",
        description: ""
      });
      this.incrementProperty('form.signal');
    },
    removeCredential(index) {
      let members = this.get('form.government_credentials');
      members.removeAt(index);
      this.incrementProperty('form.signal');
    },
  }
});