import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  flagship_product: {
    validators: [
      validator('presence', true),
    ]
  },
  summary: {
    validators: [
      validator('presence', true),
    ]
  },
  website_url: {
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'url'
      })
    ]
  },
  linkedin_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  },
  facebook_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  },
  youtube_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  },
  twitter_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  },
  instagram_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  flagship_product: DS.attr('string'),
  summary: DS.attr('string'),
  website_url: DS.attr('string'),
  linkedin_url: DS.attr('string'),
  facebook_url: DS.attr('string'),
  youtube_url: DS.attr('string'),
  twitter_url: DS.attr('string'),
  instagram_url: DS.attr('string'),
});
