import { helper } from '@ember/component/helper';

export function arrayExcludes([array, value, ...rest]) {
  return !(array && array.includes(value));
}

export default helper(arrayExcludes);
