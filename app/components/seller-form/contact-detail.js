import Component from '@ember/component';

export default Component.extend({
  sameAsAbove: false,
  actions: {
    sameClicked() {
      this.toggleProperty('sameAsAbove')
      if(this.get('sameAsAbove')) {
        this.set('form.representative_name', this.get('form.contact_name'));
        this.set('form.representative_email', this.get('form.contact_email'));
        this.set('form.representative_phone', this.get('form.contact_phone'));
      }
    },
    addAddress() {
      this.form.addresses.pushObject({address: '', suburb: '', postcode: '', state: '', country: 'AU'});
    },
    removeAddress(index) {
      this.form.addresses.removeAt(index);
    }
  }
});
