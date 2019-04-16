import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  actions: {
    topClick() {
      $(window).scrollTop(0);
    }
  }
});
