
var disk = require('../lib/ya-disk.js');
const PARAMS_ERROR = { error: 'Not full params' };

exports.getDirInfo = function(req, res) {
  var q = req.query;
  if(q.path) {
    disk.getFileInfo(req.user.accToken, q.path)
    .then( (dirInfo) => {
      res.json( JSON.parse(dirInfo) );
    })
    .catch( (err) => {
      res.json({ error: err });
    })
  } else {
    res.json(PARAMS_ERROR);
  }
}
