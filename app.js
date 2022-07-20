require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const morgan = require('morgan');
const session = require('express-session');
const fileUpload = require('express-fileupload'); // загрузка файлов
const sessionConfig = require('./sessionConfig');
const animals = require('./routes/animals');
const tariffs = require('./routes/tariffs');
const search = require('./routes/search');

// const { saveSessionData } = require('./middlewares/midware');

// const indexRout = require('./routes/indexRout');
const admin = require('./routes/admin');

const app = express();

const PORT = process.env.PORT || 3100;

app.use(morgan('dev'));
app.use(fileUpload()); // загрузка файлов

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerHelper('compare', function compare(p, q, options) {
  return (p === q) ? options.fn(this) : options.inverse(this);
});

hbs.registerPartials(path.join(`${__dirname}/views/partials`));

app.use(session(sessionConfig));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res, next) => {
  if (req.session.login) {
    res.locals.login = req.session.login;
    console.log(res.locals.login);
  }
  next();
});

app.use('/admin', admin);

app.get('/', (req, res) => {
  res.locals.atciveLink = 'main';
  res.render('index');
  // req.session.login = login
});

app.use('/tariffs', tariffs);

app.use('/animals', animals);
app.use('/search', search);

app.listen(PORT, () => {
  console.log('Server is up!');
});
