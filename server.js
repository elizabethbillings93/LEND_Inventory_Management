// pull in express-handlebars
var express = require ('express');
var path = require ('path');
var exphbs = require('express-handlebars');
var app = express();


const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());

// view folder
app.set ('views', path.join (__dirname, 'views'));
app.engine ('handlebars',hbs.engine);
app.set ('view engine', 'handlebars');

// set port
app.set ('port', (process.env.PORT || 3001));

app.use (express.static(path.join(__dirname,'public')));
app.get('/', function(req,res){
  res.render('login');
})

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(app.get ('port'), function (){
    console.log (`Server is listening`)
  })
});
