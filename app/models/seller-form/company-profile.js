import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  website_url: DS.attr('string'),
  linkedin_url: DS.attr('string'),
  awards: DS.attr('json'),
  accreditations: DS.attr('json'),
  engagements: DS.attr('json'),
});
