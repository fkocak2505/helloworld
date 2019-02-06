var express = require('express');
var app = express();

const API_VERSION = "0.0.1";

app.get('/api/public', (req, res) => {
    res.json({
        message: "Hello Server with Console Deploy with eb deploy..."
    });
});

var port = process.env.PORT || 3010
app.listen(port, function(){
  console.log('Server listening on fkocak', port);
})