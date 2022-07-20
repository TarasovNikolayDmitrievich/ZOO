const router = require('express').Router();
const { Op } = require('sequelize');
const { Animals, Pictures } = require('../db/models');

router.post('/', async (req, res) => {
  const findWord = req.body.search;
  const animals = await Animals.findAll({
    include: {
      limit: 1,
      model: Pictures,
    },
    where: {
      name: {
        [Op.iLike]: `%${findWord}%`,
      },
    },
  });

  if (animals.length == 1) {
    res.redirect(`/animals/${animals[0].id}`);
  } else {
    res.render('animals', { animals });
  }
});

module.exports = router;
