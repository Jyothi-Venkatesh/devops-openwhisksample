/**
  *
  * main() will be invoked when you Run This Action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
  var https = require('https');
  var request = require('request');
  var querystring = require('querystring');
  var rp = require('request-promise');
function main(params) {
  
  var response = {};
 console.log(params.type  + " ch1")
 if(params.type == "identify")
 {
   
var postheaders = {
  'Authorization': 'Bearer dG9rOjAyY2U5NWViXzhkODlfNGI5M185ZjJjXzY2MzU1YTZkNTgyOToxOjA=',
  'Accept': 'application/json'

};
console.log(params.userId  +"params.userId")
var promise = new Promise(function (resolve, reject) {
     request({
  headers: postheaders,
  uri: 'https://api.intercom.io/users?user_id='+params.userId,
  method: 'GET'
}, function (err, res, body) {
            console.log("posting data");
          if (err) {
              console.log('error: ', err, body);
              reject(err);
          } else {
              console.log('success: ', res.body, 'successfully sent');
              resolve(JSON.parse(res.body));
          }
      });
  });
 }

  return  promise ;
}




