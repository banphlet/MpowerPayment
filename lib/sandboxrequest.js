'use strict';
var Client = require('node-rest-client').Client;
var HttpClient = new Client()
var Promise = require('bluebird')
/**
 * Test MpowerDirect Pay in Sandbox Mode.
 * You can programmatically transfer funds from your MPower Account to other MPower customers via DirectPay API. 
 * For security purposes, you must expicitly enable direct pay option in your 
 * integration setup. If can always enable or disable direct pay option by updating your integration setup.
 * @param {object} body
 */
function DirectPaySandbox(body){
var config = this.config
var mpowerurl ='https://app.mpowerpayments.com/sandbox-api/v1/direct-pay/credit-account' ;  
return new Promise( function(resolve,reject){
    var args = {
        headers: config,
        data: body
    }
    HttpClient.post(mpowerurl, args, function (data,response){
        resolve(data)
    }).on('error',function (err){
        reject(err.request.options)
    })
})
}

module.exports = DirectPaySandbox;