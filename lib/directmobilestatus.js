'use strict';
var Client = require('node-rest-client').Client;
var HttpClient = new Client()
var Promise = require('bluebird')
/**
 * Check the Status of A Mobile Request
 * @param {object} body
 */
function DirectMobileStatus(body){
var mpowerurl = this.mpowerurl + '/direct-mobile/status';
var config = this.config;
return new Promise( function(resolve,reject){
    var args = {
        headers: config,
        data: body
    }
    HttpClient.post(mpowerurl, args, function (data,response){
        resolve(data)
    }).on('error', function(err){
        reject(err.request.options)
    })
})
}
module.exports = DirectMobileStatus;