import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | supplier-application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:supplier-application');
    assert.ok(route);
  });
});
