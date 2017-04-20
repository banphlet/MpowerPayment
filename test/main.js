var assert = require('assert');
var Mpower =  require('../index.js')
describe('Initialize', function () {
   
it('should initialize with given data', function (done){
    var mp = new Mpower({
      masterKey: 'master',
      privateKey: 'private',
      publicKey: 'public',
      token: 'token'
    });
    assert.strictEqual(mp.config['MP-Master-Key'], 'master');
    assert.strictEqual(mp.config['MP-Private-Key'], 'private');
    // assert.strictEqual(setup.config['MP-Public-Key'], 'public');
    assert.strictEqual(mp.config['MP-Token'], 'token');
    done();
  });
})