import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | seller account/legal disclosure', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('seller-account/legal-disclosure', {});
    assert.ok(model);
  });
});
