import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  icon: computed('message', function () {
    return {
      signup_confirmation_sent: 'envelope-open',
      confirmation_sent: 'at',
      password_reset_sent: 'paper-plane',
      account_updated: 'envelope',
      email_confirmation: 'check-square',
      invitation_accepted: 'check-circle',
      password_updated: 'key',
      account_unlocked: 'unlock',
      manager_approved: 'thumbs-up',
      product_order: 'phone',
    }[this.get('message')] || 'bomb';
  }),
  title: computed('message', function () {
    return {
      signup_confirmation_sent: 'Almost there!',
      confirmation_sent: 'Confirm your email address',
      password_reset_sent: 'Password reset email has been sent',
      account_updated: 'Account has been updated',
      email_confirmation: 'Email confirmation is complete',
      invitation_accepted: 'Invitation is accepted',
      password_updated: 'Password is updated',
      account_unlocked: 'Your account is unlocked',
      manager_approved: 'You approved the buyer account',
      product_order: 'What happens next',
    }[this.get('message')] || 'Something went wrong';
  }),
  description: computed('message', function () {
    return {
      signup_confirmation_sent: 'To complete the sign-up process, please click the one-time link sent to your email address and continue registration.',
      confirmation_sent: 'We have sent a one-time link to your email address. Please click the link to verify your email address and continue your registration.',
      password_reset_sent: 'If your email address is in our database, you will receive a password recovery email in a few minutes.',
      account_updated: 'Your account has been updated successfully. If you requested a change of email, you should confirm the new address first.',
      email_confirmation: 'Thanks for confirming your email address. Please go to dashboard to continue with your application.',
      invitation_accepted: 'Thanks for accepting the invitation. Please go to dashboard to continue with your application.',
      password_updated: 'Your password is recovered. Please go to dashboard to continue with your application.',
      account_unlocked: 'You are now logged in and can access your account.',
      manager_approved: 'Your application approval is almost complete. We will be in touch in 1 to 2 days.',
      product_order: 'We will be in touch soon to guide you personally through the order process.',
    }[this.get('message')] || 'You probably entered an incorrect success message';
  }),
});
