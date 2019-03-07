import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | buyer-dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:buyer-dashboard');
    assert.ok(route);
  });
});
