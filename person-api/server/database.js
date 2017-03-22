const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

const url = 'mongodb://localhost:27017/person-api';

mongoose.connect(url, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {console.log("Great success!")});