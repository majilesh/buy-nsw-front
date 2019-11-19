import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | accept-admin-invite', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:accept-admin-invite');
    assert.ok(route);
  });
});
