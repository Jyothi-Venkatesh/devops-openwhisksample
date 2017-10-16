var express = require('express');
var ejs = require('ejs');
var cloudant = require('./cloudantdb');

var app = express();

/*app.get('/', function(req,res){
    res.locals.pagetitle ="Second way of titling";
	res.render("index",{title: "Express app1"})
});

*/
cloudant.initialize(); 

app.get('/products', function(req,res){
    res.locals.pagetitle ="Second way of titling";
   
	cloudant.fetchAllDocs(function(err, cloudantdoc){
        res.render("index", {
            title: "Express Application",
            records: cloudantdoc
        }); 
    });
});

app.get('/products/productdetails/:docId', function(req,res){
    
    cloudant.fetchrecord("nodejsdoc","nodejsfirst-view",req.params.docId,function(err,cloudantdoc){
            res.render("products/view",{
                product:cloudantdoc});
    }

);
    });


app.listen(3000);

app.set('view engine', 'html');
app.engine('html', ejs.renderFile); 


