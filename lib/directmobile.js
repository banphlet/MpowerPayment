'use strict';
var Client = require('node-rest-client').Client;
var HttpClient = new Client()
var Promise = require('bluebird')

/**
 * Charge Mobile Money Directly. Airtel and Mtn
 * @param {object} body
 */
function DirectMobileCharge(body){
var mpowerurl = this.mpowerurl+ '/direct-mobile/charge';
var config =  this.config
 return new Promise( function(resolve,reject){
    var args = {
        headers: config,
        data: body
    }
    HttpClient.post(mpowerurl, args, function (data,response){
        resolve(data)
    }).on('error', function (err){
        reject(err.request.options)
    })
})
}
module.exports = DirectMobileCharge;
