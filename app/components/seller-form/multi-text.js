import Component from '@ember/component';

export default Component.extend({
   actions: {
     addRow() {
       this.field.pushObject('');
       if(this.get('signal') != undefined) {
         this.incrementProperty('signal');
       }
     },
     removeRow(index) {
       this.field.removeAt(index);
       if(this.get('signal') != undefined) {
         this.incrementProperty('signal');
       }
     }
   }
});
