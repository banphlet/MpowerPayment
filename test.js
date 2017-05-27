'use strict';
var express = require('express');
var app = express();
var bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
var apiRoutes = express.Router(); 
app.use('/api/v1', apiRoutes);
var mp = require('./index'); 
// START THE SERVER
// =============================================================================
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on " + 'localhost:' + port);
  });
 apiRoutes.get('/', function(req, res) {
    res.send('Working api verson 1...Horray');
});

 apiRoutes.post('/moneycallback', function(req, res) {
   console.log(req.body)
  })
var  data = {
  secretid: 'bxjnlkou',
  clientid: 'rfizcbnm',
  merchantaccnumber: 'HM2205170009' ///////
}
var mpower = new mp(data)
var py = {
  "CustomerName": "Customer Name",
  "CustomerMsisdn": "233261868755",
  "CustomerEmail": "customeremail@gmail.com",
  "Channel": "airtel-gh",
  "Amount": 0.8,
 "PrimaryCallbackUrl": "https://hubtelpayment.herokuapp.com/api/v1/moneycallback",
  "Description": "T Shirt"
}
mpower.ReceiveMobileMoney(py).then(res=>{
  console.log(res)
})