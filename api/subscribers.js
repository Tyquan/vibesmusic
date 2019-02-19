const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const Subscriber = require('../models/subscriber');
const router = express.Router();

router.post('/', (req, res, next) => {
	let sub = new Subscriber(req.body);
	sub.save()
		 .then((data) => {
		 	res.status(200).json(data);
		 })
		 .catch((err) => {
		 	next(err);
		 });
});

router.get('/', (req, res, next) => {
	if (!req.session.user) {
		return res.status(400).send("You have to be logged in to view this data");
	} else {
		Subscriber
		.find({})
		.sort({date_created: -1})
		.exec((err, data) => {
			if (err) {
				next(err);
			} else {
				res.status(200).json(data);
			}
		});
	}
});

module.exports = router;