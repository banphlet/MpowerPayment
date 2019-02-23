# MpowerPayment

[![Greenkeeper badge](https://badges.greenkeeper.io/banphlet/MpowerPayment.svg)](https://greenkeeper.io/)

# LIBRAY IS DEPRECATED PLEASE USE [HUBTEL PAYMENT](https://github.com/banphlet/HubtelMobilePayment)
This is an unofficial NodeJs Library for [MpowerPayment](http://www.mpowerpayments.com) 
Built using [node-rest-client](https://github.com/aacerox/node-rest-client).
# Installation
```sh
npm i --save mpowerpayment
```
# API configuration
  See Mpower Documentation for data format. [Mpower Docs](http://www.mpowerpayments.com/developers/http) 
Setup Api Keys
```sh
  var mpowerpayments = require('mpowerpayment');
  var mppayments = new mpowerpayments({
   masterKey: 'dd6f2c90-f075-012f-5b69-00155d864600',
  privateKey: 'test_private_oDLVlm1eNyh0IsetdhdJvcl0ygA',
  publicKey: 'test_public_zzF3ywvX9DE-OSDNhUqKoaTI4wc',
  token: 'ca03737cf942cf644f36'
  })
  ```
 It is most advicable to put keys in environmental variables.
 # Direct Mobile Charge
 Requires Mpower Live Keys To Work.
  After initialization.
  ```
   var data = { "customer_name" : "Name",
 "customer_phone" : "0545434366d", 
 "customer_email" : "customer@domainname.com", 
 "wallet_provider" : "MTN", 
 "merchant_name" : "Classic Shoes Ltd",
  "amount" : "0.2"
 }  
 mppayments.DirectMobileCharge(data).then(function(data) {
           console.log(data)
        })
 ```
  # Direct Mobile Status
   ```
 var data = { "token" : "6d875bf6f28b4c5d01e58e7c"} 
 mppayments.DirectMobileStatus(data).then(function(data) {
  console.log(data)
     })
 ```
 # Direct Pay
```
var data = { "account_alias" : "0244124660", "amount" : 30.50 };
mppayments.DirectPay(data).then(function(data) {
console.log(data)
     })
 ```
 # Direct Pay SandBox Mode
 When using Sandbox mode, use test keys from Mpower Dashboard.
```
 var data = { "account_alias" : "0244124660", "amount" : 30.50 };
 mppayments.DirectPaySandbox(data).then(function(data) {
  console.log(data)
 })
```
 # TODO
 1. Add browser support.
 2. Integration  into Ionic 2 and Angular 2 Apps.

# EXTRA INFO
Ionic 2 developers can use the library by running on a node js server, creating a route and making an  ```http``` request to the Url
# Running Tests
``` npm i mocha -g```
npm test.

HAPPY HACKING ❤ 
