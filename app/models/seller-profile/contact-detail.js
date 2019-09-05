import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  website_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      }),
      validator('format', {
        allowBlank: true,
        regex: /^((http:\/\/)|(https:\/\/))/,
        message: 'URL must start with http:// or https://',
      }),
    ]
  },
  linkedin_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      }),
      validator('format', {
        allowBlank: true,
        regex: /^((http:\/\/)|(https:\/\/))/,
        message: 'URL must start with http:// or https://',
      }),
    ]
  },
  facebook_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      }),
      validator('format', {
        allowBlank: true,
        regex: /^((http:\/\/)|(https:\/\/))/,
        message: 'URL must start with http:// or https://',
      }),
    ]
  },
  youtube_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      }),
      validator('format', {
        allowBlank: true,
        regex: /^((http:\/\/)|(https:\/\/))/,
        message: 'URL must start with http:// or https://',
      }),
    ]
  },
  twitter_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      }),
      validator('format', {
        allowBlank: true,
        regex: /^((http:\/\/)|(https:\/\/))/,
        message: 'URL must start with http:// or https://',
      }),
    ]
  },
  instagram_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      }),
      validator('format', {
        allowBlank: true,
        regex: /^((http:\/\/)|(https:\/\/))/,
        message: 'URL must start with http:// or https://',
      }),
    ]
  }
});

export default Model.extend(Validations, {
  website_url: DS.attr('string'),
  linkedin_url: DS.attr('string'),
  facebook_url: DS.attr('string'),
  youtube_url: DS.attr('string'),
  twitter_url: DS.attr('string'),
  instagram_url: DS.attr('string'),
});
