import DS from 'ember-data';
const { Model } = DS;
import { buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
});

export default Model.extend(Validations, {
});
