const express = require('express');
const sequelize = require('./config/connection')
const app = express();

// This is the table generation when we first run the server and the table doesn't exist yet. 
// const tablegen = require('./models')

const PORT = process.env.PORT || 3001;


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`You are listening on port ${PORT}`)
    });
});
