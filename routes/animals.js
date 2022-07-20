const fs = require('fs').promises;
const router = require('express').Router();
const { Op } = require('sequelize');
const { Animals, Pictures } = require('../db/models');
const { checkIsNotSession } = require('../middlewares/index.middle');

router.get('/', async (req, res) => {
  const animals = await Animals.findAll({
    include: {
      limit: 1,
      model: Pictures,
    },
    order: [['createdAt', 'DESC']],
  });
  res.locals.atciveLink = 'animals';
  res.render('animals', { animals });
});

router.route('/new')
  .get(checkIsNotSession, (req, res) => {
    res.render('admin/new');
  })
  .post(async (req, res) => {
    const { name, description } = req.body;
    let sampleFile;
    let uploadPath;
    const arr = [];
    sampleFile = req.files.sampleFile;

    const newAnimal = await Animals.create({ name, description });

    await fs.mkdir(`/${__dirname}/../public/img/${newAnimal.id}`);

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    if (req.files.sampleFile.length > 1) {
      req.files.sampleFile.forEach((e) => {
        arr.push({ link: e.name, animal_id: newAnimal.id });
      });

      await Pictures.bulkCreate(arr);

      for (let i = 0; i < req.files.sampleFile.length; i++) {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        uploadPath = `/${__dirname}/../public/img/${newAnimal.id}/${req.files.sampleFile[i].name}`;
        // Use the mv() method to place the file somewhere on your server
        req.files.sampleFile[i].mv(uploadPath, (err) => {
          if (err) { return res.status(500).send(err); }
        });
      }
    } else {
      await Pictures.create({ link: sampleFile.name, animal_id: newAnimal.id });
      uploadPath = `/${__dirname}/../public/img/${newAnimal.id}/${sampleFile.name}`;
      sampleFile.mv(uploadPath, (err) => {
        if (err) { return res.status(500).send(err); }
      });
    }

    res.redirect(`/animals/${newAnimal.id}`);
  });

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const animal = await Animals.findOne({
      where: { id },
      include: {
        model: Pictures,
      },
    });
    res.render('animals/animalDetails', { animal });
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Animals.destroy({
        where: {
          id,
        },
      });
      await fs.rm(`public/img/${id}`, { recursive: true });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

router.route('/:id/edit')
  .get(checkIsNotSession, async (req, res) => {
    const { id } = req.params;
    const animal = await Animals.findOne({
      where: {
        id,
      },
      include: {
        model: Pictures,
      },
    });
    res.render('admin/edit', { animal });
  })
  .patch(async (req, res) => {
    const { name, description, deletePic } = req.body;
    let uploadPath;
    const arr = [];
    const { id } = req.params;
    const deletePicArr = JSON.parse(`[${deletePic}]`);
    try {
      await Animals.update(
        {
          name,
          description,
        },
        {
          where: {
            id,
          },
        },
      );

      if (req.files) {
        if (req.files.sampleFile.length > 1) {
          req.files.sampleFile.forEach((e) => {
            arr.push({ link: e.name, animal_id: id });
          });

          await Pictures.bulkCreate(arr);

          for (let i = 0; i < req.files.sampleFile.length; i++) {
            uploadPath = `/${__dirname}/../public/img/${id}/${req.files.sampleFile[i].name}`;
            req.files.sampleFile[i].mv(uploadPath, (err) => {
              if (err) { return res.status(500).send(err); }
            });
          }
        } else {
          const { sampleFile } = req.files;
          await Pictures.create({ link: sampleFile.name, animal_id: id });
          uploadPath = `/${__dirname}/../public/img/${id}/${sampleFile.name}`;
          sampleFile.mv(uploadPath, (err) => {
            if (err) { return res.status(500).send(err); }
          });
        }
      }

      if (deletePicArr.length > 0) {
        const pics = await Pictures.findAll({
          where: {
            id: {
              [Op.in]: deletePicArr,
            },
          },
        });
        pics.forEach(async (el) => {
          await fs.rm(`public/img/${id}/${el.link}`);
          el.destroy();
        });
      }

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

module.exports = router;
