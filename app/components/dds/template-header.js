import Component from '@ember/component';
import layout from '../../templates/components/dds/template-header';

export default Component.extend({
  layout,
  tagName: 'header',
  classNameBindings: ['isWayfinder:wayfinder:DDS'],
  isWayfinder: false,
  attributeBindings: ['role'],
  role: 'banner',
  actions: {
    logout() {
      this.get("auth").logout();
    }
  },
});
