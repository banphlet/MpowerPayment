'use strict';
var Client = require('node-rest-client').Client;
var request = require('superagent');
var Promise = require('bluebird')
/**
 * Receive Money Directly From Mobile Money Uses To Your Hubtel Account
 * @param {object} body
 */
function SendMobileMoney(body){
var config =  this.config
var hubtelurl = this.hubtelurl +'merchants/' + config.merchantaccnumber + '/receive/mobilemoney';
return new Promise( function(resolve,reject){
  request
  .post(hubtelurl)
   .auth(config.clientid, config.secretid)
   .set('Accept', 'application/json')
   .send(body)
   .end((err,res)=>{
       if(err){
           resolve(err)
       }
       else {
           resolve(res)
       }
   })
})
}
module.exports = SendMobileMoney