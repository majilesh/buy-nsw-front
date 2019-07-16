import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | supplier-application', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:supplier-application');
    assert.ok(controller);
  });
});
