// import { connect } from 'mongoose';
const mongoose = require('mongoose');

// const express = require('express');
// const routes = require('./routes');

require('dotenv').config();

// mongoose.connect(
// 	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.qd9ub.mongodb.net/?retryWrites=true&w=majority`,
// 	() => {
// 		console.log('connected to mongodb');
// 	}
// );

mongoose.connect(
	process.env.DB,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('connected to database myDb ;)');
	}
);

// mongoose
// 	.connect(process.env.MONGO_PROD_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true,
// 	})
// 	.then(() => console.log('Database connected!'))
// 	.catch((err) => console.log(err));
