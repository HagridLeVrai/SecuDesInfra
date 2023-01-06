'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');

const express = require('express');

// App
var app = express();

// Cert
const privateKey  = fs.readFileSync('sslcert/files.powerzio.net.key', 'utf8');
const certificate = fs.readFileSync('sslcert/files.powerzio.net.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};



var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('<a href="public/bank.powerzio.net.pdf">Bank.powerzio.net</a>');
});

httpServer.listen(8080);
httpsServer.listen(8443);