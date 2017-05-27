'use strict';
var Client = require('node-rest-client').Client;
var Promise = require('bluebird')
var request = require('request')
/**
 * Charge Mobile Money Directly. Airtel and Mtn
 * @param {object} body
 */
function ReceiveMobileMoney(body){
var config =  this.config
var hubtelurl = this.hubtelurl +'merchants/' + config.merchantaccnumber + '/receive/mobilemoney';
 return new Promise( function(resolve,reject){  
     console.log(hubtelurl)
 request.post(hubtelurl,{
     auth: {
    'user': config.clientid,
    'pass': config.secretid,
    'sendImmediately': true
  },
  body: JSON.stringify(body),
//  headers: [{ name: 'content-type',value: 'application/json'}]
 }, callback)
  function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    resolve(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
  else {
      resolve("error is " + error)
  }
}
})
}
module.exports = ReceiveMobileMoney;
