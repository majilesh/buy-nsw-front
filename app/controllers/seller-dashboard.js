import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    manageProfile() {
      var seller = this.model.seller;
      if(seller.declined) {
        seller.revise().then(function() {
          window.location.href = '/profile';
        });
      } else if(seller.status == "live") {
        seller.startAmendment().then(function() {
          window.location.href = '/profile';
        });
      } else {
          window.location.href = '/profile';
      }
    }
  }
});
