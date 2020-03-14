const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const about = require('./routes/about');
const education = require('./routes/education');
const experience = require('./routes/experience');
const hobbies = require('./routes/hobbies');
const charity = require('./routes/charity');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(about);
app.use(education);
app.use(hobbies);
app.use(experience);
app.use(charity);

app.use((req, res, next) => {
    res.status(404).send('<h2>Page not found</h2>');
});

app.listen(3000);
