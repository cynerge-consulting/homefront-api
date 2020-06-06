var helmet = require('helmet');
var compression = require('compression');
var express = require('express');
var path = require('path');
var pino = require('express-pino-logger')();

var port = 3000;
var app = new express();

//app.use(compression()); // compressed responses for faster responses from the endpoints.
app.use(helmet()); // For basic protection of the server.
app.use(pino); // For fast, detailed and color orientated output to the console.

app.use(express.static(path.join(__dirname, 'public')));

// Example endpoint with basic error handling
app.get('/', async function (req, res, next) {
  try {
    res.json({ success: true });
    //Do stuff
  } catch (e) {
    req.log.error(e);
    next(e);
  }
});

// Start the server listening on the assigned port number.
app.listen(port, () => console.log('Example app listening on port: ', port));
module.exports = app;
