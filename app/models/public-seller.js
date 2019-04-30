import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  tags: DS.attr(),
  website_url: DS.attr('string'),
  linkedin_url: DS.attr('string'),
  contact_name: DS.attr('string'),
  contact_phone: DS.attr('string'),
  contact_email: DS.attr('string'),
  representative_name: DS.attr('string'),
  representative_phone: DS.attr('string'),
  representative_email: DS.attr('string'),
  abn: DS.attr('string'),
  addresses: DS.attr(),
  no_experience: DS.attr('boolean'),
  local_government_experience: DS.attr('boolean'),
  state_government_experience: DS.attr('boolean'),
  federal_government_experience: DS.attr('boolean'),
  international_government_experience: DS.attr('boolean'),
});
