module.exports = {
  toUSD: function(myNumber) {
    var number = myNumber.toString();
    var dollars = number.split('.')[0];
    var cents = (number.split('.')[1] || '') + '00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
  }
};
