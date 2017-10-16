var cloudant = require( 'cloudant' );
var db = null;

// 'https://jyothiv3:Trijal%123@jyothiv3.cloudant.com



var dbURL = 'https://neelakanta123:9703249273@neelakanta123.cloudant.com';
var dbName = 'nodejsdb';

module.exports = {
    initialize:initialize,
    fetchAllDocs:fetchAllDocs,
    fetchrecord:fetchrecord
    }  

    var cloudantInstance;
    
    function initialize() {
        console.log(dbURL);
       // console.log("process.env.DATABASE_USER_PASSWORD:" + process.env.DATABASE_USER_PASSWORD);
        try{
            cloudantInstance = cloudant( { url:dbURL} );
        }catch (err){
            // making attempt another time
           console.log("cloudant db connection error ",err);
        }
    
        db = getDb(cloudantInstance) ;
        //console.log("db",db);
       } 

 function getDb(cloudantInstance) {
        console.log("database name: " + dbName);
        return cloudantInstance.db.use( dbName );
    } 
    
    


function fetchAllDocs(cb){
    db.list({include_docs:true}, function (err, data) {
        if(err){
            console.log('error', err);
            cb(err, null);
        }else {
            console.log(data.rows);
            cb(null, data.rows);
        }
    });
} 

function fetchrecord(doc, view, docid, cb) {
    console.log(doc+' '+view+' '+docid);
    db.view(doc, view, function( err, response ) {
        db.get(docid, function(err, doc){
            if(err){
                cb(err, null);
            }else {
                console.log('doc: ', doc);
                cb(null, doc);
            }
        });
    } );
} 