import Countries from 'ember-cli-countries/enums/countries';
import Component from '@ember/component';

export default Component.extend({
  countries: Countries.toKeyValueJson().map(country => { return { value: country.key, label: country.value }; }),

  actions: {
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
