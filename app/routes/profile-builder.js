import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },
  renderTemplate: function() {
    this.render('profile-builder', {
      into: 'profile-builder'
    });
  },
  model() {
    return RSVP.hash({
      essential_information: this.store.queryRecord("seller-profile/essential-information", {}),
      contact_detail: this.store.queryRecord("seller-profile/contact-detail", {}),
      reputation_and_distinction: this.store.queryRecord("seller-profile/reputation-and-distinction", {}),
      capability_and_experty: this.store.queryRecord("seller-profile/capability-and-experty", {}),
      reference_and_case_study: this.store.queryRecord("seller-profile/reference-and-case-study", {}),
      government_credential: this.store.queryRecord("seller-profile/government-credential", {}),
      scheme_and_panel: this.store.queryRecord("seller-profile/scheme-and-panel", {}),
      team_member: this.store.queryRecord("seller-profile/team-member", {}),
      promotional_video: this.store.queryRecord("seller-profile/promotional-video", {}),

      seller: this.store.queryRecord('public-seller', { current: true }),
    });
  },
});
