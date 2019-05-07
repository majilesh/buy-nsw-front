import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  icon: computed('message', function () {
    return {
      signup_confirmation_sent: 'envelope-open',
      confirmation_sent: 'at',
      password_reset_sent: 'paper-plane',
      account_updated: 'envelope',
      email_confirmed: 'check-square',
      invitation_accepted: 'check-circle',
      password_updated: 'key',
      account_unlocked: 'unlock',
      manager_approved: 'thumbs-up',
    }[this.get('message')] || 'bomb';
  }),
  title: computed('message', function () {
    return {
      signup_confirmation_sent: 'Almost there!',
      confirmation_sent: 'Confirm your email address',
      password_reset_sent: 'Password reset email has been sent',
      account_updated: 'Account has been updated',
      email_confirmed: 'Email confirmation is complete',
      invitation_accepted: 'Invitation is accepted',
      password_updated: 'Password is updated',
      account_unlocked: 'Your account is unlocked now',
      manager_approved: 'You approved the buyer account',
    }[this.get('message')] || 'Something went wrong';
  }),
  description: computed('message', function () {
    return {
      signup_confirmation_sent: 'To complete sign-up process, please click the one-time link sent to your email address and continue registration.',
      confirmation_sent: 'We have sent a one-time link to your email address, please click the link to verify your email address and continue your registration.',
      password_reset_sent: 'If your email address is in our database, you will receive a password recovery email in a few minutes.',
      account_updated: 'Your account has been updated successfully. If you requested change of email, the new address have to be confirmed first.',
      email_confirmed: 'Thanks for confirming your email address. Please go to dashboard to continue with your application.',
      invitation_accepted: 'Thanks for accepting the invitation. Please go to dashboard to continue with your application.',
      password_updated: 'Your password is recovered. Please go to dashboard to continue with your application.',
      account_unlocked: 'We logged you in as well, you can continue to dashboard.',
      manager_approved: 'We will get in touch when it is approved by us as well',
    }[this.get('message')] || 'You probably entered an incorrect success message';
  }),
});
