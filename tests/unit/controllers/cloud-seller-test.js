import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | cloud-seller', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:cloud-seller');
    assert.ok(controller);
  });
});
