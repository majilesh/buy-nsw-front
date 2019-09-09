import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  fileService: inject(),
  actions: {
    addMember() {
      let team_members = this.get('form.team_members');
      team_members.pushObject({
        avatar_id: null,
        first_name: "",
        last_name: "",
        role: "",
        email: "",
        speciality: ""
      });
      this.incrementProperty('form.signal');
    },
    removeMember(index) {
      let members = this.get('form.team_members');
      members.removeAt(index);
      this.incrementProperty('form.signal');
    },
  }
});
