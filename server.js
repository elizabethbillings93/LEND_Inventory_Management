const express = require('express');
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars');
const routes = require('./routes/');
const app = express();

const hbs = exphbs.create({});

// This is the table generation when we first run the server and the table doesn't exist yet. 
// const tablegen = require('./models')

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Needed for handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`You are listening on port ${PORT}`)
    });
});
