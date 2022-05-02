
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path= require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// app.engine('.hbs', exphbs({
//   defaultLayout: 'main',
//   ext: '.hbs',
//   layoutsDir: path.join(__dirname,'views')}));

app.set('views', path.join(__dirname));
app.set('view engine', 'hbs');
// app.use('view'(path.join(__dirname, 'views')));
app.use(require('./controllers/products-routes'));
 

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
