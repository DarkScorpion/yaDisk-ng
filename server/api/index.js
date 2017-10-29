
const routes = require('express').Router();

const user = require('./user.js');
const yaDisk = require('./ya-disk.js');

routes.use( (req, res, next) => {
  if(!req.user) return res.json({ error: 'not auth' });
  next();
});

routes.get('/get-user', user.getUser);

routes.get('/get-dir-info', yaDisk.getDirInfo);

module.exports = routes;
