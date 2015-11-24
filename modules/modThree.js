var modOne = require('./modOne');
var modTwo = require('./modTwo');

module.exports = {
  money: function(min, max) {
    var current = modOne.random(min, max);
    return modTwo.toUSD(current);
  },

  balance: function() {
    return 'Account balance: \n';
  }
};
