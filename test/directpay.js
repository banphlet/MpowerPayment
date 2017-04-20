var assert = require('assert');
var DirectPay = require('../lib/directpay.js');
var Mpower =  require('../index.js')
describe('DirectPay', function () {
    it('should transfer money from one Mpower Account to Another', function (done) {
        var data = {
    masterKey: '3434ddr-b088e-45df31-9e4595-ef4566c263e6c',
    privateKey: 'live_private_02dL6S;djdjjhdfNK2LbeX-RTdfhAo',
    token: 'a9ccf01dfdfa3455efd4f82'
        }
        var mp = new Mpower(data)
    var py = { "account_alias" : "0244124660", "amount" : 30.50 }
        mp.DirectPay(py).then(function(data) {
            assert.ok(data)
        })
    done();
})
})