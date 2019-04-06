import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invite-team-member', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invite-team-member');
    assert.ok(route);
  });
});
