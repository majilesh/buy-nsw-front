import Component from '@ember/component';

export default Component.extend({
   didReceiveAttrs() {
     this._super(...arguments);
     let field = this.get('field')
     if(!Array.isArray(field)){
       field = ["",""];
     }
     while(field.length < 2) {
       field.pushObject('');
       this.set('field', field);
     }
   },
   actions: {
     addRow() {
       this.field.pushObject('');
     },
     removeRow(index) {
       this.field.removeAt(index);
     }
   }
});
