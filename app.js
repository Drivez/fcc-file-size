var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest:'uploads/'});

var port = process.env.PORT || 8080;

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), function(req, res, next){
    return res.json(req.file);
});


app.listen(port, function(){
    console.log("App up and runnning");
});
