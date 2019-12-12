import { helper } from '@ember/component/helper';

export function arrayIncludes([array, value, ...rest]) { // eslint-disable-line no-unused-vars
  return array && array.includes(value);
}

export default helper(arrayIncludes);
