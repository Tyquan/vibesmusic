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
	res.render('pages/showvideo');
});

router.get('/aboutus', (req, res, next) => {
	res.render('pages/aboutus');
});

router.get('/music', (req, res, next) => {
	res.render('pages/music');
});

router.get('/interviews', (req, res, next) => {
	res.render('pages/interviews');
});

router.get('/news', (req, res, next) => {
	res.render('pages/news');
});

router.get('/podcasts', (req, res, next) => {
	res.render('pages/podcasts');
});

router.get('/contactus', (req, res, next) => {
	res.render('forms/contactus');
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
	res.render('forms/submit');
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
	res.render('pages/privacy');
});

/* GET signup Page. */
router.get('/signup', (req, res, next)=> {
    res.render('forms/signup');
});

/* GET Logout Page. */
router.get('/logout', (req, res, next)=> {
    res.send('Logout Activated');
});

module.exports = router;