'use strict';

var log = require('./logger.js');

function logMiddleware(req, res, next)
{
  if( req.path.search(/\.(js|css|jpg|png|gif|ico)?$/) === -1 ) {
    var i = getReqInfo(req);
    log.info( '[%s %s] %s %s %s', i.path, i.method, i.ip, i.data, i.user );
  }
  next();
}

function formatIP(ip) {
  return ip.replace('::ffff:', '');
}

function getReqInfo(req) {
  var jStr = JSON.stringify;

  var path = req.path;
  var method = req.method;
  var ip = formatIP(req.ip);

  var user = (req.user && req.user.profile) ? req.user.profile.username : '???';
  var data = (method === 'POST') ? jStr(req.body) : jStr(req.query);

  return { ip, method, path, data, user };
}

module.exports = logMiddleware;
