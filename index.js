'use strict';
require('dotenv').config();
const server = require('./server.js');
const port = process.env.PORT || 5000;
server.start(port);