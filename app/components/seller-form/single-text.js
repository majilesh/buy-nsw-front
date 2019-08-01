import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateValue() {
      let index = this.get('index');
      let value = this.get('value');
      let field = this.get('field');
      field[index] = value;
      this.field.setObjects(field);
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
