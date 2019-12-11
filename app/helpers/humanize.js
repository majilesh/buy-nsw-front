import { helper } from '@ember/component/helper';

export function humanize([str, ...rest]) { // eslint-disable-line no-unused-vars
  return str
      .replace(/^[\s_-]+|[\s_-]+$/g, '')
      .replace(/[_\s-]+/g, ' ')
      .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}

export default helper(humanize);
