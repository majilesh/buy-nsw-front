import Component from '@ember/component';
import layout from '../../templates/components/dds/new-password';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { next } from '@ember/runloop';

export default Component.extend({
  layout,
  passwordStrength: inject(),
  hidePassword: true,
  confirmation: '',
  length: computed('field', function() {
    let field = this.get('field');
    return field == undefined ? 0 : field.length;
  }),
  strength: computed('field', function () {
    const passwordStrength = this.get('passwordStrength');
    return passwordStrength.strengthSync(this.get('field')).score;
  }),
  setValid() {
    let self = this;
    next(() => {
      if (!self.isDestroyed) {
        self.set('valid',
          (self.get('allowBlank') && self.get('length')==0 || self.get('strength') >= 2) &&
          (!self.get('confirm') || self.get('field') == self.get('confirmation'))
        );
      }
    });
  },
  didReceiveAttrs() {
    this.setValid();
  },
  actions: {
    togglePassword() {
      this.toggleProperty('hidePassword');
    },
    onChange() {
      this.setValid();
    }
  }
});
