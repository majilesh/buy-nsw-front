import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let todo = true;
    let done = true;
    let self = this;
    this.get('forms').forEach(function(form) {
      let status = self.get('steps')[form.key].status;
      let optional = self.get('steps')[form.key].optional;
      if(status == 'doing' || (status == 'todo' && !optional)) {
        done = false;
      }
      if(status != 'todo') {
        todo = false;
      }
    });
    if(todo) {
      this.set('status', 'todo');
    } else if(done) {
      this.set('status', 'done');
    } else {
      this.set('status', 'doing');
    }
  }
});
