import Countries from 'ember-cli-countries/enums/countries';
import Component from '@ember/component';

export default Component.extend({
  countries: Countries.toKeyValueJson().map(country => { return { value: country.key, label: country.value }; }),

  actions: {
    addAddress() {
      this.form.addresses.pushObject({address: '', suburb: '', postcode: '', state: '', country: ''});
    },
    removeAddress(index) {
      this.form.addresses.removeAt(index);
    }
  }
});
