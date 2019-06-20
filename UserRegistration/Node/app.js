require('./config/config');
require('./models/db')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// Start the server
app.listen(process.env.PORT, () => console.log(`Server started at Port: ${process.env.PORT}`));