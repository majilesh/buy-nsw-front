import { helper } from '@ember/component/helper';

export default helper(function removeSpaces(params/*, hash*/) {
  return params[0].replace(/ /g, '');
});
