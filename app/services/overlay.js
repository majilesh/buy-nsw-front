import Service from '@ember/service';
import $ from 'jquery'

export default Service.extend({
  keys: [],
  show(key = 'default') {
    if(!this.get('keys').includes(key)) {
      this.keys.pushObject(key);
    }
    $('.overlay').show();
  },
  hide(key = 'default') {
    this.set('keys', this.keys.filter((el) => el != key));
    if(this.get('keys').length == 0) {
      $('.overlay').hide();
    }
  }
});
