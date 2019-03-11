import Component from '@ember/component';

export default Component.extend({
  checked: false,
  init() {
    this._super(...arguments);
    var arrayField = (this.get('field') || '').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    this.set('checked', arrayField.includes(this.get('name')));
  },
  actions: {
    toggle() {
      var arrayField = (this.get('field') || '').trim();
      if(arrayField=="") {
        arrayField = [];
      } else {
        arrayField = arrayField.split(',');
      }

      var fieldValue = this.get('name');
      if(arrayField.includes(fieldValue)) {
        arrayField.removeObject(fieldValue);
        this.set('checked', false);
      } else {
        arrayField.pushObject(fieldValue);
        this.set('checked', true);
      }
      this.set('field', arrayField.join(','));
    }
  }
});
