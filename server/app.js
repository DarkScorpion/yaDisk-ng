'use strict'

var server = require('./server.js');
var config = require('../config.js');

var s1 = server.listen(config.port, () => {
  console.log( 'Server start on port: %s', s1.address().port );
});
