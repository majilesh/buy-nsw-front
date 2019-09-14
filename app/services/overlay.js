import Service from '@ember/service';
import $ from 'jquery'

export default Service.extend({
  show() {
    $('.overlay').show();
  },
  hide() {
    $('.overlay').hide();
  }
});
