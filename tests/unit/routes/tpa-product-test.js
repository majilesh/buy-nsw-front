import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tpa-product', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tpa-product');
    assert.ok(route);
  });
});
