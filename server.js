// pull in express-handlebars
var express = require ('express');
var path = require ('path');
var exphbs = require('express-handlebars');
var app = express();
const hbs = exphbs.create({});
// view folder
app.set ('views', path.join (__dirname, 'views'));
app.engine ('handlebars',hbs.engine);
app.set ('view engine', 'handlebars');
// set port
app.set ('port', (process.env.PORT || 3001));

app.use (express.static('public'));
app.get('/', function(req,res){
  res.render('onboard');
})
app.listen(app.get ('port'), function (){
  console.log ('Server is listening')
})
