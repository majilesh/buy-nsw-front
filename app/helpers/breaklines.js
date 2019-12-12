import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function breaklines([text, ...rest]) { // eslint-disable-line no-unused-vars
  return new htmlSafe(text && text.replace(/(\r\n|\n|\r)/gm, '<br>'));
}

export default helper(breaklines);
