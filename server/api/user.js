
exports.getUser = (req, res) => {
  return req.user ? res.json(req.user.profile._json) : res.json({ error: 'not auth' });
}
