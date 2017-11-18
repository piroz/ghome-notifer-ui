const express = require("express");
const bodyParser = require('body-parser');
const googlehome = require("google-home-notifier");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res, next){
    res.render("index", {});
});

app.post("/", function(req, res, next){

    let deviceName = process.env.DEVICE_NAME ? process.env.DEVICE_NAME : '';
    
    googlehome.device(deviceName, 'ja');
    googlehome.notify(req.body.word, function(res) {
        console.log(res);
    });
    res.render("index", {});
});
