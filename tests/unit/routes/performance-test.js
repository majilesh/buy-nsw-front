import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | performance', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:performance');
    assert.ok(route);
  });
});
