
const express = require('express');
const handlebars = require('express-handlebars');
// const hbs = exphbs.create({});
const path= require('path');
const app = express();
const PORT = process.env.PORT || 3001;


app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname));
app.engine('handlebars', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  }));
app.use(express.static('public'));
// app.use('view'(path.join(__dirname, 'views')));
app.use(require('./controllers/products-routes'));
 

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
