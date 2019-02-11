import Component from '@ember/component';

export default Component.extend({
  action: '',
  actions: {
    actionSelected(action) {
      this.set('action', action);
      console.log(action);
      console.log(this.product.id);
    },
    confirmProductAction() {
      console.log(this.product.id);
      console.log(this.get('action'));
      if(this.get('action') == 'deactivate') {
        this.product.deactivate().then((response) => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'activate') {
        this.product.activate().then((response) => {
          this.product.reload();
          this.set('action', '');
        });
      }
    }
  }
});
