import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  renderTemplate: function() {
    this.render('seller-profile', {
      into: 'seller-profile'
    });
  },
  model(params) {
    return RSVP.hash({
      essential_information: this.store.findRecord("seller-profile/essential-information", params.seller_id),
      contact_detail: this.store.findRecord("seller-profile/contact-detail", params.seller_id),
      reputation_and_distinction: this.store.findRecord("seller-profile/reputation-and-distinction", params.seller_id),
      capability_and_experty: this.store.findRecord("seller-profile/capability-and-experty", params.seller_id),
      reference_and_case_study: this.store.findRecord("seller-profile/reference-and-case-study", params.seller_id),
      government_credential: this.store.findRecord("seller-profile/government-credential", params.seller_id),
      scheme_and_panel: this.store.findRecord("seller-profile/scheme-and-panel", params.seller_id),
      team_member: this.store.findRecord("seller-profile/team-member", params.seller_id),
      promotional_video: this.store.findRecord("seller-profile/promotional-video", params.seller_id),

      seller: this.store.findRecord('public-seller', params.seller_id),
    });
  },
});
