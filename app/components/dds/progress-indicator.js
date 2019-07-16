import Component from '@ember/component';

export default Component.extend({
  activeMenu: null,
  didReceiveAttrs() {
    this._super(...arguments);
    let self = this;
    this.set('activeMenu', null);
    this.get('items').forEach(function(item) {
      if(item.subItems) {
        let todo = true;
        let done = true;
        item.subItems.forEach(function(subItem) {
          if(subItem.step == self.get('stepName')) {
            self.set('activeMenu', item.step);
          };
          if(subItem.status != 'done') {
            done = false;
          }
          if(subItem.status != 'todo') {
            todo = false;
          }
        });
        if(done) {
          item.status = 'done';
        } else if(todo) {
          item.status = 'todo';
        } else {
          item.status = 'doing';
        }
      }
    });
  }
});
