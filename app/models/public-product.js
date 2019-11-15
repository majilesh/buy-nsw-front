import DS from 'ember-data';

export default DS.Model.extend({
  section: DS.attr('string'),
  name: DS.attr('string'),
  summary: DS.attr('string'),
  tags: DS.attr(),
  public_seller_id: DS.attr('string'),
  public_seller_name: DS.attr('string'),

  contact_first_name: DS.attr('string'),
  contact_last_name: DS.attr('string'),
  contact_email: DS.attr('string'),
  contact_phone: DS.attr('string'),

  demo_video_url: DS.attr('string'),

  organisation_resold: DS.attr('string'),

  audiences: DS.attr(),
  features: DS.attr(),
  benefits: DS.attr(),

  free_version: DS.attr('boolean'),
  free_version_details: DS.attr('string'),

  free_trial: DS.attr('boolean'),
  free_trial_url: DS.attr('string'),

  pricing_unit: DS.attr('string'),
  pricing_currency: DS.attr('string'),
  pricing_currency_other: DS.attr('string'),
  pricing_min: DS.attr('number'),
  pricing_max: DS.attr('number'),
  pricing_calculator_url: DS.attr('string'),
  pricing_variables: DS.attr('string'),

  education_pricing: DS.attr('boolean'), 
  education_pricing_eligibility: DS.attr('string'),
  education_pricing_differences: DS.attr('string'),

  not_for_profit_pricing: DS.attr('boolean'),
  not_for_profit_pricing_eligibility: DS.attr('string'),
  not_for_profit_pricing_differences: DS.attr('string'),

  onboarding_assistance: DS.attr('string'),
  offboarding_assistance: DS.attr('string'),

  guaranteed_availability: DS.attr('string'),
  support_options: DS.attr(),
  support_options_additional_cost: DS.attr('string'),
  support_levels: DS.attr('string'),

  metrics_contents: DS.attr('string'),

  metrics_channel_types: DS.attr(),
  metrics_channel_other: DS.attr('string'),

  outage_channel_types: DS.attr(),
  outage_channel_other: DS.attr('string'),

  usage_channel_types: DS.attr(),
  usage_channel_other: DS.attr('string'),

  authentication_required: DS.attr('boolean'),
  authentication_types: DS.attr(),
  authentication_other: DS.attr('string'),

  deployment_model: DS.attr(),
  deployment_model_other: DS.attr('string'),

  addon_extension_type: DS.attr('string'),
  addon_extension_details: DS.attr('string'),

  api: DS.attr('string'),
  api_capabilities: DS.attr('string'),
  api_automation: DS.attr('string'),

  government_network_type: DS.attr(),
  government_network_other: DS.attr('string'),

  web_interface: DS.attr('boolean'),
  web_interface_details: DS.attr('string'),
  supported_browsers: DS.attr(),

  installed_application: DS.attr('boolean'),
  supported_os: DS.attr(),
  supported_os_other: DS.attr('string'),

  mobile_devices: DS.attr('boolean'),
  mobile_desktop_differences: DS.attr('string'),

  accessibility_type: DS.attr('string'),
  accessibility_exclusions: DS.attr('string'),

  scaling_type: DS.attr('string'),

  data_location_control: DS.attr('boolean'),
  data_location: DS.attr('string'),
  data_location_other: DS.attr('string'),
  data_location_unknown_reason: DS.attr('string'),
  own_data_centre: DS.attr('boolean'),
  own_data_centre_details: DS.attr('string'),
  third_party_involved: DS.attr('boolean'),
  third_party_involved_details: DS.attr('string'),
  
  data_import_formats: DS.attr(),
  data_import_formats_other: DS.attr('string'),
  
  data_export_formats: DS.attr(),
  data_export_formats_other: DS.attr('string'),
  
  data_access_restrictions: DS.attr('boolean'),
  data_access_restrictions_details: DS.attr('string'),

  audit_information: DS.attr('boolean'),
  audit_storage_period: DS.attr('string'),
  log_storage_period: DS.attr('string'),
  data_disposal_approach: DS.attr('string'),

  backup_capability: DS.attr('string'),
  backup_scheduling_type: DS.attr('string'),
  backup_recovery_type: DS.attr('string'),

  encryption_transit_user_types: DS.attr(),
  encryption_transit_user_other: DS.attr('string'),

  encryption_transit_network_types: DS.attr(),
  encryption_transit_network_other: DS.attr('string'),

  encryption_rest_types: DS.attr(),
  encryption_rest_other: DS.attr('string'),

  encryption_keys_controller: DS.attr('string'),

  data_centre_security_standards: DS.attr('string'),

  iso_27001: DS.attr('boolean'),
  iso_27001_accreditor: DS.attr('string'),
  iso_27001_date: DS.attr('string'),
  iso_27001_exclusions: DS.attr('string'),

  iso_27017: DS.attr('boolean'),
  iso_27017_accreditor: DS.attr('string'),
  iso_27017_date: DS.attr('string'),
  iso_27017_exclusions: DS.attr('string'),

  iso_27018: DS.attr('boolean'),
  iso_27018_accreditor: DS.attr('string'),
  iso_27018_date: DS.attr('string'),
  iso_27018_exclusions: DS.attr('string'),

  csa_star: DS.attr('boolean'),
  csa_star_accreditor: DS.attr('string'),
  csa_star_date: DS.attr('string'),
  csa_star_level: DS.attr('string'),
  csa_star_exclusions: DS.attr('string'),

  pci_dss: DS.attr('boolean'),
  pci_dss_accreditor: DS.attr('string'),
  pci_dss_date: DS.attr('string'),
  pci_dss_exclusions: DS.attr('string'),

  soc_2: DS.attr('boolean'),
  soc_2_accreditor: DS.attr('string'),
  soc_2_date: DS.attr('string'),
  soc_2_exclusions: DS.attr('string'),

  irap_type: DS.attr('string'),
  asd_certified: DS.attr('string'),
  security_classification_types: DS.attr(),
  security_information_url: DS.attr('string'),

  secure_development_approach: DS.attr('string'),
  penetration_testing_frequency: DS.attr('string'),
  penetration_testing_approach: DS.attr(),

  virtualisation: DS.attr('boolean'),
  virtualisation_implementor: DS.attr('string'),
  virtualisation_third_party: DS.attr('string'),
  virtualisation_technologies: DS.attr(),
  virtualisation_technologies_other: DS.attr('string'),
  user_separation_details: DS.attr('string'),

  change_management_processes: DS.attr('string'),
  change_management_approach: DS.attr('string'),
  vulnerability_processes: DS.attr('string'),
  vulnerability_approach: DS.attr('string'),
  protective_monitoring_processes: DS.attr('string'),
  protective_monitoring_approach: DS.attr('string'),
  incident_management_processes: DS.attr('string'),
  incident_management_approach: DS.attr('string'),
  access_control_testing_frequency: DS.attr('string'),
});
