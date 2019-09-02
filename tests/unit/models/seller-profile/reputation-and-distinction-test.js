import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | seller profile/reputation and distinction', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('seller-profile/reputation-and-distinction', {});
    assert.ok(model);
  });
});
