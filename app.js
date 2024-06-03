var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/categories');
var productRouter = require('./routes/products');
var app = express();

const cors = require('cors')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); //cho phép domain gọi đến api

// kết nối db mongodb
mongoose.connect('mongodb://localhost:27017/wd18306')
.then(()=> console.log('Kết nối thành công'))
.catch((err) => console.log('Thất bại ',err));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);

module.exports = app;
