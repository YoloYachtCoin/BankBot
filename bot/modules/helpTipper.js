'use strict';
let config = require('config');
let dogeFee = config.get('yyc').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['bankerhelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'Help commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **YYcoin (YYC) Banker**\n    Transaction Fees: **' + yycFee + '**\n' +
      '__**Commands**__\n' +
      '  **' + prefix + 'banker** : Displays This Message\n' +
      '  **' + prefix + 'banker balance** : get your balance\n' +
      '  **' + prefix + 'banker deposit** : get address for your deposits\n' +
      '  **' + prefix + 'banker withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'banker <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'banker private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'banker @Monroe Trout 10**\n' +
      '  **' + prefix + 'banker withdraw FTYyirgB3BmrvLuLbMChs8TEkJK8QMzYu9 10**\n' +
      '  **' + prefix + 'banker private @Monroe Trout 10**\n' +
      '  **' + prefix + 'banker balance**\n' +
      '  **' + prefix + 'banker deposit**\n'
    );
  }
};
