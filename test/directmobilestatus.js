var assert = require('assert');
var DirectMobileStatus = require('../lib/directmobilestatus.js');
var Mpower =  require('../index.js')
describe('DirectMobileStatus', function () {
    it('should check mpower payment status', function (done) {
        var data = {
    masterKey: '3434ddr-b088e-45df31-9e4595-ef4566c263e6c',
    privateKey: 'live_private_02dL6S;djdjjhdfNK2LbeX-RTdfhAo',
    token: 'a9ccf01dfdfa3455efd4f82'
        }
        var mp = new Mpower(data)
    var py = { "token" : "6d875bf6f28b4c5d01e58e7c"}   
        mp.DirectMobileStatus(py).then(function(data) {
            assert.ok(data)
        })
    done();
})
})