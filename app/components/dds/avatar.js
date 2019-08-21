import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  imageUrl: computed('avatarId', function() {
    let id = this.get('avatarId');

    if (id) {
      let component = this;
      this.get('store').query('document', { ids: [id] }).then(function(documents){
        console.log(documents.get('firstObject.url'));
        component.set('imageUrl', documents.get('firstObject.url'));
      });
    }

    return null;
  }),
});
