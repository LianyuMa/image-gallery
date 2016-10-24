#!/usr/bin/env node

var Http=require('http');
var Express=require('express');
var Morgan=require('morgan');
require('date-format-lite');
var Path = require('path');

var app = Express();
app.use(Morgan('combined'));

var version=1;

app.get('/cache.manifest',function(q,s){
    s.setHeader('content-type','text/cache-manifest');
    s.end(['CACHE MANIFEST',
           '#v'+version,
           'CACHE:',
           '/',
           'https://fonts.googleapis.com/css?family=Boogaloo',
           'http://192.168.136.157:8080/images/image_1.jpg',
           'http://192.168.136.157:8080/images/image_2.jpg',
           'http://192.168.136.157:8080/images/image_3.jpg',
           'http://192.168.136.157:8080/images/image_4.jpg',
           'http://192.168.136.157:8080/images/image_5.jpg',
           'http://192.168.136.157:8080/images/image_6.jpg',
           'http://192.168.136.157:8080/images/image_7.jpg',
           'http://192.168.136.157:8080/images/icon.png',
           'http://192.168.136.157:8080/javascript/jquery-3.1.1.min.js',
           'http://192.168.136.157:8080/javascript/owl.carousel.min.js',
           'http://192.168.136.157:8080/javascript/jquery.magnific-popup.js',
           'http://192.168.136.157:8080/javascript/script.js',
           'http://192.168.136.157:8080/css/owl.carousel.css',
           'http://192.168.136.157:8080/css/magnific-popup.css',
           'http://192.168.136.157:8080/css/style.css',
           'http://192.168.136.157:8080/css/owl.theme.default.min.css'
    ].join("\n"));
});

app.use(Express.static(Path.join(__dirname, 'public')));

Http.createServer(app).listen(8080);
