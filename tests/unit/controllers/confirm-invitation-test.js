import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | confirm-invitation', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:confirm-invitation');
    assert.ok(controller);
  });
});
