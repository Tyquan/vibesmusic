const express = require('express');
const mongoose = require('mongoose');
const Video = require('../models/video');
const Message = require('../models/message');
const Submit = require('../models/submit');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	Video.find({}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			throw err;
		} else {
			res.render('index', { 
			    titleMain: 'Tyquan Reddick',
			    titleAbbrev: 'T.R',
			    videos: doc
			});
		}
	});
});

router.get('/showvideo/:id', (req, res, next) => {
	res.render('showvideo');
});

router.get('/aboutus', (req, res, next) => {
	res.render('aboutus');
});

router.get('/contactus', (req, res, next) => {
	res.render('contactus');
});

router.post('/contactus', (req, res, next) => {
	let message = new Message(req.body);
	message.save()
		.then((data) => {
			res.redirect('contactus');
		})
		.catch((error) => {
			res.redirect('sorrypage');
		});
});

router.get('/sorrypage', (req, res, next) => {
	res.render('sorrypage');
});

router.get('/submit', (req, res, next) => {
	res.render('submit');
});

router.post('/submit', (req, res, next) => {
	let submit = new Submit(req.body);
	submit.save()
		.then((data) => {
			res.redirect('submit');
		})
		.catch((error) => {
			res.redirect('sorrypage');
		});
});

router.get('/privacy', (req, res, next) => {
	res.render('privacy');
});

/* GET signup Page. */
router.get('/signup', (req, res, next)=> {
    res.render('signup');
});

/* GET Logout Page. */
router.get('/logout', (req, res, next)=> {
    res.send('Logout Activated');
});

module.exports = router;