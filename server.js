// ------------ Global ----------------
var express = require('express');
var path = require('path');
var app = express();
;



//Static files
app.use(express.static(path.join(__dirname, '/public')));


//Get all Routes
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//listen to port
app.listen(process.env.PORT || 3012, () =>{
    console.log('Running Port 3012 Babe....');
});


