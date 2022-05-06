// pull in express-handlebars
const express = require ('express');
const path = require ('path');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// Create Session
const sess = {
  secret: 'Super secret secret',
   cookie: {
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// view folder
app.set ('views', path.join (__dirname, 'views'));
app.engine ('handlebars',hbs.engine);
app.set ('view engine', 'handlebars');

// set port
app.set ('port', (process.env.PORT || 3001));

//Middle Ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(app.get ('port'), function (){
    console.log (`Server is listening`)
  })
});
