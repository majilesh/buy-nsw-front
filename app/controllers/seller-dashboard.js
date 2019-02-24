import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    manageProfile() {
      var seller = this.model.seller;
      if(seller.status == "live") {
        seller.startAmendment().then(function() {
          window.location.href = '/profile';
        });
      }
    }
  }
});
