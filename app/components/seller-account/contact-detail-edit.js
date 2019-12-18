import Component from '@ember/component';

export default Component.extend({
  actions: {
    sameClicked() {
      this.toggleProperty('sameAsAbove')

      this.set('form.representative_first_name', this.get('form.contact_first_name'));
      this.set('form.representative_last_name', this.get('form.contact_last_name'));
      this.set('form.representative_email', this.get('form.contact_email'));
      this.set('form.representative_phone', this.get('form.contact_phone'));
    }
  }
});
