const checkIsSession = (req, res, next) => {
  if (req.session.login) {
    res.redirect('/');
  } else {
    next();
  }
};

const checkIsNotSession = (req, res, next) => {
  if (!req.session.login) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = { checkIsSession, checkIsNotSession };
