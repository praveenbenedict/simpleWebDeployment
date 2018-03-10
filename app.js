var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.get('/' , function(req, res){
    res.json({
        name: 'Afrin'
    });
});

app.listen(port);