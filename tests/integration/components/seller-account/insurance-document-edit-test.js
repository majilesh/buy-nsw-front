import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | seller-account/insurance-document-edit', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SellerAccount::InsuranceDocumentEdit />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <SellerAccount::InsuranceDocumentEdit>
        template block text
      </SellerAccount::InsuranceDocumentEdit>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
