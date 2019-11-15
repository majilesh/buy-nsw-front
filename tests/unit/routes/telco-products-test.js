import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | telco-products', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:telco-products');
    assert.ok(route);
  });
});
