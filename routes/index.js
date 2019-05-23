const express = require('express');
const mongoose = require('mongoose');
const Video = require('../models/video');
const Message = require('../models/message');
//const Submit = require('../models/submit');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
	    title: 'Herra Hip Hop | Hip Hop'
	});
});

router.get('/showvideo/:id', (req, res, next) => {
	res.render('pages/showvideo', { 
	    title: 'Herra Hip Hop | Watch Video'
	});
});

router.get('/aboutus', (req, res, next) => {
	res.render('pages/aboutus', { 
	    title: 'Herra Hip Hop | About Us'
	});
});

router.get('/music', (req, res, next) => {
	res.render('pages/music', { 
	    title: 'Herra Hip Hop | Music Videos'
	});
});

router.get('/interviews', (req, res, next) => {
	res.render('pages/interviews', { 
	    title: 'Herra Hip Hop | Interviews'
	});
});

router.get('/news', (req, res, next) => {
	res.render('pages/news', { 
	    title: 'Herra Hip Hop | News'
	});
});

router.get('/podcasts', (req, res, next) => {
	res.render('pages/podcasts', { 
	    title: 'Herra Hip Hop | Podcasts and Shows'
	});
});

router.get('/sports', (req, res, next) => {
	res.render('pages/sports', { 
	    title: 'Herra Hip Hop | Sports'
	});
});

router.get('/contactus', (req, res, next) => {
	res.render('forms/contactus', { 
	    title: 'Herra Hip Hop | Contact Us'
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
	    title: 'Herra Hip Hop | Submit a Video'
	});
});

// router.post('/submit', (req, res, next) => {
// 	let submit = new Submit(req.body);
// 	submit.save()
// 		.then((data) => {
// 			res.redirect('submit');
// 		})
// 		.catch((error) => {
// 			res.redirect('sorrypage');
// 		});
// });

router.get('/privacy', (req, res, next) => {
	res.render('pages/privacy', { 
	    title: 'Herra Hip Hop | Privacy Page'
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