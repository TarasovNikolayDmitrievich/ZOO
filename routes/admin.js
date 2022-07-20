const router = require('express').Router();
const { checkIsNotSession, checkIsSession } = require('../middlewares/index.middle');

const {
  admin, Animals, Pictures, Tariffs,
} = require('../db/models');

router.get('/', checkIsSession, (req, res) => {
  res.render('admin/login');
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  // console.log(req.body);
  try {
    const adminInBase = await admin.findOne({
      where: {
        login,
      },
    });
    console.log(adminInBase);

    if (adminInBase.password === password) {
      req.session.login = login;
      res.redirect('/');
    }
  } catch (error) {
    console.log('Нет такого администратора');
    res.sendStatus(404);
  }
});

router.get('/logout', checkIsNotSession, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.COOKIE_NAME);

  res.redirect('/admin');
});

module.exports = router;
