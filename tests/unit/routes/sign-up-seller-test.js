import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sign-up-seller', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sign-up-seller');
    assert.ok(route);
  });
});
