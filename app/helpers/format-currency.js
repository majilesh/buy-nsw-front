import { helper } from '@ember/component/helper';

export function formatCurrency([value, currency, other, unit, ...rest]) {
  let dollars = Math.floor(value);
  let cents = Math.floor(value * 100) % 100;
  if(currency == 'other'){
    currency = other.toLowerCase();
  }
  let sign = {
    'usd': '$',
    'aud': '$',
    'cad': '$',
    'nzd': '$',
    'gbp': '£',
    'eur': '€',
    'jpy': '¥',
    'chf': '₣',
  }[currency];
  
  let displayedCurrency, displayedUnit;
  if(sign) {
    displayedCurrency = currency.toUpperCase();
  }else{
    sign = '';
    displayedCurrency = '';
  }
  if(unit) {
    displayedUnit = unit;
  }else{
    displayedUnit = '';
  }

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${sign}${dollars}.${cents} ${displayedCurrency} ${displayedUnit}`;
}

export default helper(formatCurrency);
