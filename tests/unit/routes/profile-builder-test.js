import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profile-builder', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profile-builder');
    assert.ok(route);
  });
});
