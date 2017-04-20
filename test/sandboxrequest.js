var assert = require('assert');
var DirectPaySandbox = require('../lib/sandboxrequest.js');
var Mpower =  require('../index.js')
describe('DirectPaySandbox', function () {
    it('should test transfering money from one mpower account to Another in Sandbox', function (done) {
        var data = {
    masterKey: '3434ddr-b088e-45df31-9e4595-ef4566c263e6c',
    privateKey: 'live_private_02dL6S;djdjjhdfNK2LbeX-RTdfhAo',
    token: 'a9ccf01dfdfa3455efd4f82'
        }
        var mp = new Mpower(data)
    var py = { "account_alias" : "0244124660", "amount" : 30.50 }
        mp.DirectPaySandbox(py).then(function(data) {
            assert.ok(data)
        })
    done();
})
})