import { helper } from '@ember/component/helper';
import moment from 'moment';

function dateValid(date) {
  return date != "" && date != undefined &&
         date.match(/^\d{4}-\d{1,2}-\d{1,2}$/) != null &&
         moment.parseZone(date, 'YYYY-MM-DD').isValid();
}

export default helper(function auDate(params/*, hash*/) {
  let date = params[0];
  if(dateValid(date)){
    let m = moment.parseZone(date, 'YYYY-MM-DD');
    return m.format('DD MMM YYYY');
  } else {
    return '--';
  }
});
