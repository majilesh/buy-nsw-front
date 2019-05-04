import { helper } from '@ember/component/helper';

export function arrayIncludes([array, value, ...rest]) {
  return array && array.includes(value);
}

export default helper(arrayIncludes);
