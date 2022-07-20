const router = require('express').Router();
const { Tariffs } = require('../db/models');

router.get('/', async (req, res) => {
  const tarif = await Tariffs.findOne();
  res.locals.atciveLink = 'tarif';
  res.render('tariffs', { tarif });
});

router.put('/', async (req, res) => {
  let tarif;

  try {
    const {
      adult_work, adult_week, child_work, child_week,
    } = req.body;
    tarif = await Tariffs.findOne();

    tarif.adult_work = req.body.adult_work;
    tarif.adult_week = req.body.adult_week;
    tarif.child_work = req.body.child_work;
    tarif.child_week = req.body.child_week;

    tarif.save();

    res.json({tarif})
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = router;
