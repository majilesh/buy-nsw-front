import Component from '@ember/component';
import Countries from 'ember-cli-countries/enums/countries';

export default Component.extend({
  countries: Countries.toKeyValueJson().map(country => { return { value: country.key, label: country.value }; }),
  sameAsAbove: false,

  actions: {
    sameClicked() {
      this.toggleProperty('sameAsAbove')

      this.set('form.representative_first_name', this.get('form.contact_first_name'));
      this.set('form.representative_last_name', this.get('form.contact_last_name'));
      this.set('form.representative_email', this.get('form.contact_email'));
      this.set('form.representative_phone', this.get('form.contact_phone'));

      this.set('form.apiErrors.representative_first_name', null);
      this.set('form.apiErrors.representative_last_name', null);
      this.set('form.apiErrors.representative_email', null);
      this.set('form.apiErrors.representative_phone', null);
    },
    addAddress() {
      this.form.addresses.pushObject({address: '', address_2: '', address_3: '', suburb: '', postcode: '', state: '', country: ''});
      if(this.get('form.signal') != undefined) {
        this.incrementProperty('form.signal');
      }
    },
    removeAddress(index) {
      this.form.addresses.removeAt(index);
      if(this.get('form.signal') != undefined) {
        this.incrementProperty('form.signal');
      }
    }
  }
});
