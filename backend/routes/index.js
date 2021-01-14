const express = require('express');
const app = express();

app.use(require('./payments.route'));

module.exports = app;