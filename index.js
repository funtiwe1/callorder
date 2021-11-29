'use strict'

const https = require('https')
const fs = require('fs')
const express = require('express')

const app = express();
app.use(express.static('static'));

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
app.get('/',(req,res)=>res.send('ok'));
app.post('/',(req,res)=>res.send('ok post'));
app.listen(7001);
https.createServer(options,app).listen(7000);
