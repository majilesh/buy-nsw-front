import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | product-order', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:product-order');
    assert.ok(route);
  });
});
