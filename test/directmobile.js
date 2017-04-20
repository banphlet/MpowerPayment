var assert = require('assert');
var DirectMobileCharge = require('../lib/directmobile.js');
var Mpower =  require('../index.js')
describe('DirectMobileCharge', function () {
    it('should send direct mobile charge to mobile wallet', function (done) {
        var data = {
    masterKey: '3434ddr-b088e-45df31-9e4595-ef4566c263e6c',
    privateKey: 'live_private_02dL6S;djdjjhdfNK2LbeX-RTdfhAo',
    token: 'a9ccf01dfdfa3455efd4f82'
        }
        var mp = new Mpower(data)
    var py = { "customer_name" : "Name",
 "customer_phone" : "0545434366d", 
 "customer_email" : "customer@domainname.com", 
 "wallet_provider" : "MTN", 
 "merchant_name" : "Classic Shoes Ltd",
  "amount" : "0.2"
 }    
        mp.DirectMobileCharge(py).then(function(data) {
            assert.ok(data)
        })
    done();
})
})