import Component from '@ember/component';

export default Component.extend({
  home: false,
  willRender() {
    this._super(...arguments);
    this.set('home', window.location.pathname == '/ict/');
  }
});
