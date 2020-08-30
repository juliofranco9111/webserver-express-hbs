const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//escoger el port
const port = process.env.PORT || 3000;

//servir contenido estatico
app.use(express.static(__dirname + '/public'));

//Express HBS engine

//register partials
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
   //render usa los hbs
   res.render('home', {
      name: 'Julio',
   });
});

app.get('/about', (req, res) => {
   //render usa los hbs
   res.render('partials/about', {
      name: 'Julio',
   });
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});