"use strict";
var DirectMobileCharge = require('./lib/directmobile');
var DirectMobileStatus = require('./lib/directmobilestatus');
var DirectPay = require('./lib/directpay');
var DirectPaySandbox = require('./lib/sandboxrequest');
/**
 * Set up mpower authentication
 * @param {object} data
 */
function MpowerPayment(data){
    if(!data.masterKey ||  !data.privateKey || !data.token){
        throw ('MpowerPayment Authentication failed')
    }
  this.config = {}
  this.config['MP-Master-Key'] = data && data.masterKey || process.env.MP_MASTER_KEY;
  this.config['MP-Private-Key'] = data && data.privateKey || process.env.MP_PRIVATE_KEY;
  // this.config['MP-Public-Key'] = data && data.publicKey || process.env.MP_PUBLIC_KEY;
  this.config['MP-Token'] = data && data.token || process.env.MP_TOKEN;
  this.config['Content-Type'] = 'application/json';
this.mpowerurl = 'https://app.mpowerpayments.com/api/v1';

}

MpowerPayment.prototype.DirectMobileCharge = DirectMobileCharge;
MpowerPayment.prototype.DirectMobileStatus = DirectMobileStatus;
MpowerPayment.prototype.DirectPay = DirectPay;
MpowerPayment.prototype.DirectPaySandbox = DirectPaySandbox;
module.exports = MpowerPayment;