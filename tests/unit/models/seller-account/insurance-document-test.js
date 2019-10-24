import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | seller account/insurance document', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('seller-account/insurance-document', {});
    assert.ok(model);
  });
});
