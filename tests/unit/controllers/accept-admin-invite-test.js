import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | accept-admin-invite', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:accept-admin-invite');
    assert.ok(controller);
  });
});