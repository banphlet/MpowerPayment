'use strict';
var express = require('express');
var app = express();
var bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
var apiRoutes = express.Router(); 
app.use('/api/v1', apiRoutes);
var mp = require('./index')
// START THE SERVER
// =============================================================================
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on " + 'localhost:' + port);
  });
 apiRoutes.get('/', function(req, res) {
    res.send('Working api verson 1...Horray');
});
var  data = {
    masterKey: '4370baab-b01e-4531-9e95-ef463c263e6c',
    privateKey: 'live_private_02V59YYL6S3zy4NK2LbeX-RThAo',
    token: 'a9ccf015d1d7678e3f82'
}
var mpower = new mp(data)
var py = { "customer_name" : "Theophilus",
 "customer_phone" : "0261868755", 
 "customer_email" : "customer@domainname.com", 
 "wallet_provider" : "AIRTEL", 
 "merchant_name" : "Classic Shoes Ltd",
  "amount" : "0.2" }
mpower.DirectPaySandbox(py).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})