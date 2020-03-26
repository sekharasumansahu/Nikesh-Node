const express = require('express');
export const router = express.Router();

require('dotenv').config();

const app = express();

app.use('/service',require('./routes/url/user.url'));

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running on port ${process.env.PORT}...!!!`);
});

module.exports = app;
