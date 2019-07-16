import Component from '@ember/component';
import Countries from 'ember-cli-countries/enums/countries';
import { computed } from '@ember/object';

export default Component.extend({
  countries: Countries.toKeyValueJson().map(country => { return { value: country.key, label: country.value }; }),
  sameAsAbove: false,

  actions: {
    sameClicked() {
      this.toggleProperty('sameAsAbove')

      this.set('form.representative_name', this.get('form.contact_name'));
      this.set('form.representative_email', this.get('form.contact_email'));
      this.set('form.representative_phone', this.get('form.contact_phone'));
    },
    addAddress() {
      this.form.addresses.pushObject({address: '', suburb: '', postcode: '', state: '', country: ''});
    },
    removeAddress(index) {
      this.form.addresses.removeAt(index);
    }
  }
});
