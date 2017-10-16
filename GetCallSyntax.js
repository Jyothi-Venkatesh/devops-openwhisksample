var request = require('request');

var express = require('express');

var ejs = require('ejs');

var app = express();
app.get('/', function(req,res){

request.get("http://jsonplaceholder.typicode.com/posts", function(error, response, body){

if(!error && response.statusCode ==200 )
{
 console.log(JSON.parse(body));

 res.render("index",{
     title: "Express app1",
     JsonObject :JSON.parse(body)})
}
}); 

});


app.listen(3000);

app.set('view engine', 'html');
app.engine('html', ejs.renderFile); 

 