import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | team-members', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:team-members');
    assert.ok(route);
  });
});
