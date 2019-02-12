import Component from '@ember/component';

export default Component.extend({
  action: '',
  actions: {
    actionSelected(action) {
      this.set('action', action);
    },
    confirmProductAction() {
      if(this.get('action') == 'submit') {
        this.product.submit().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'copy') {
        this.product.copy().then(() => {
          this.product.get('store').findAll('product', { reload: true })
          this.set('action', '');
        });
      }else if(this.get('action') == 'cancel') {
        this.product.cancel().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'withdraw') {
        this.product.withdraw().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'revise') {
        this.product.revise().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'start_amendment') {
        this.product.start_amendment().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'activate') {
        this.product.activate().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }else if(this.get('action') == 'deactivate') {
        this.product.deactivate().then(() => {
          this.product.reload();
          this.set('action', '');
        });
      }
    }
  }
});
