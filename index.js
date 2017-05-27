"use strict";
var ReceiveMobileMoney = require('./lib/receivemobilemoney');
var SendMobileMoney = require('./lib/sendmobilemoney');
/**
 * Set up mpower authentication
 * @param {object} data
 */
function MpowerPayment(data){
    if(!data.secretid ||  !data.clientid || !data.merchantaccnumber){
        throw ('MpowerPayment Authentication failed')
    }
  this.config = {}
  this.config['clientid'] = data && data.clientid || process.env.clientid;
  this.config['secretid'] = data && data.secretid || process.env.secretid;
   this.config['merchantaccnumber'] = data && data.merchantaccnumber || process.env.merchantaccnumber;
this.hubtelurl = 'https://api.hubtel.com/v1/merchantaccount/';

}

MpowerPayment.prototype.ReceiveMobileMoney = ReceiveMobileMoney;
MpowerPayment.prototype.SendMobileMoney = SendMobileMoney;
module.exports = MpowerPayment;