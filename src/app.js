const express = require('express');
const app = express();

const index =  require('./routes/home');
const borrowerRoute = require('./routes/borrowerRoute');
const lenderRoute = require('./routes/lenderRoute');
const creditProfileRoute = require('./routes/creditProfileRoute');
const assetRoute = require('./routes/assetRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/borrower', borrowerRoute);
app.use('/lender', lenderRoute);
app.use('/creditProfile', creditProfileRoute);
app.use('/asset', assetRoute);

module.exports = app;