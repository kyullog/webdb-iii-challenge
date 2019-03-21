function uppercaser(req, res, next) {
  if (req.body.name) {
    req.body.name = req.body.name.toUpperCase();
    next();
  } else {
    next();
  }
}

module.exports = uppercaser;
