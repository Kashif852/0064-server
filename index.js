
const express = require('express')
const cors = require('cors')
require("dotenv").config();

const ImageKit = require('imagekit');


const imagekit = new ImageKit({
    publicKey : "public_aEaOaYimggRM+4kgwtcDb4PKl9Y=",
    privateKey : "private_D7+4Zno0EkO2fdFhMwTeX8Zwpho=",
    urlEndpoint : "https://ik.imagekit.io/ymjlyrr8zyb"
});


var app = express()

// allow cross-origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/auth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
  });



app.listen(process.env.PORT || 4000 ,()=>console.log('Server started at : 4000'))

