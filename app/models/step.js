import DS from 'ember-data';
//import { modelAction, resourceAction } from "ember-custom-actions";

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  status: DS.attr('string')
});
