import Component from '@ember/component';
import layout from '../../templates/components/dds/drop-down';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['drop-down'],
  attributeBindings: ['customLabel:aria-label'],
  customLabel: 'navigation',
  isOpen: false,
  droplinks: [],

  headingText: computed('droplinks', 'droplinks.@each', 'auth.currentRouteName', function() {
    let droplinks = this.droplinks;
    for (let droplink of droplinks) {
      if (droplink.route == this.auth.currentRouteName) {
        return droplink.name;
      }
    }
    return "Key pages";
  }),
  
  actions: {
    onToggle(){
      this.toggleProperty("isOpen");
    },
    onClose() {
      this.set("isOpen", false);
    },
    logout() {
      this.get("auth").logout();
    }
  },
});
