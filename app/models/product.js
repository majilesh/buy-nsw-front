import DS from 'ember-data';
import { modelAction, resourceAction } from "ember-custom-actions";

export default DS.Model.extend({
  state: DS.attr('string'),
  publish: modelAction("publish"),
  search: resourceAction("search")
});
