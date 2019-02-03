// import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
// });
import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend({
  namespace: '/api/products',
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
