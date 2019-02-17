const express = require('express');
const mongoose = require('mongoose');
const Video = require('../models/video');
const Message = require('../models/message');
const Submit = require('../models/submit');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
	    title: 'Herra HipHop | Hip Hop'
	});
});

router.get('/showvideo/:id', (req, res, next) => {
	res.render('pages/showvideo', { 
	    title: 'Herra HipHop | Watch Video'
	});
});

router.get('/aboutus', (req, res, next) => {
	res.render('pages/aboutus', { 
	    title: 'Herra HipHop | About Us'
	});
});

router.get('/music', (req, res, next) => {
	res.render('pages/music', { 
	    title: 'Herra HipHop | Music Videos'
	});
});

router.get('/interviews', (req, res, next) => {
	res.render('pages/interviews', { 
	    title: 'Herra HipHop | Interviews'
	});
});

router.get('/news', (req, res, next) => {
	res.render('pages/news', { 
	    title: 'Herra HipHop | News'
	});
});

router.get('/podcasts', (req, res, next) => {
	res.render('pages/podcasts', { 
	    title: 'Herra HipHop | Podcasts and Shows'
	});
});

router.get('/contactus', (req, res, next) => {
	res.render('forms/contactus', { 
	    title: 'Herra HipHop | Contact Us'
	});
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
	res.render('forms/submit', { 
	    title: 'Herra HipHop | Submit a Video'
	});
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
	res.render('pages/privacy', { 
	    title: 'Herra HipHop | Privacy Page'
	});
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