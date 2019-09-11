import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | seller-profile/reference-and-case-study-view', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{seller-profile/reference-and-case-study-view}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#seller-profile/reference-and-case-study-view}}
        template block text
      {{/seller-profile/reference-and-case-study-view}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
