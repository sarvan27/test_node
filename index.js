const express = require('express');
const app = express();

app.get('/api', function(req, res){
   res.send("Hello world!");
});

app.listen(8080);