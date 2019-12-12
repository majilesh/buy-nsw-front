import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  flagship_product: DS.attr('string'),
  summary: DS.attr('string'),
  website_url: DS.attr('string'),
  linkedin_url: DS.attr('string'),
  twitter_url: DS.attr('string'),
  facebook_url: DS.attr('string'),
  instagram_url: DS.attr('string'),
  youtube_url: DS.attr('string'),

  accreditations: DS.attr(),
  accreditation_document_ids: DS.attr(),
  licenses: DS.attr(),
  license_document_ids: DS.attr(),
  engagements: DS.attr(),
  awards: DS.attr(),

  methodologies: DS.attr('string'),
  knowledge_base: DS.attr('string'),
  quality_control: DS.attr('string'),
  security: DS.attr('string'),

  references: DS.attr(),
  case_studies: DS.attr(),
  government_credentials: DS.attr(),
  schemes_and_panels: DS.attr(),
  team_members: DS.attr(),
  promotional_video: DS.attr('string'),

  updated_at: DS.attr('string'),
});
