import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cloud-sellers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cloud-sellers');
    assert.ok(route);
  });
});
