import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let todo = true;
    let done = true;
    let self = this;
    this.get('forms').forEach(function(form) {
      let status = self.get('steps')[form.key].status;
      if(status != 'done') {
        done = false;
      }
      if(status != 'todo') {
        todo = false;
      }
    });
    if(done) {
      this.set('status', 'done');
    } else if(todo) {
      this.set('status', 'todo');
    } else {
      this.set('status', 'doing');
    }
  }
});
