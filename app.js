var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

// router
var postRouter = require('./routes/post');
const userRouter = require('./routes/users')

var app = express();

require('./connections')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(postRouter);
app.use('/users', userRouter);

module.exports = app;