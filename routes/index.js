const express = require('express');
const mongoose = require('mongoose');
const Video = require('../models/video');
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
    // Video.findById(req.params.id, (err, data) => {
    //     if (err) {
    //         throw err;
    //     } else {
    //         res.render('showvideo', {
    //             video: data
    //         });
    //     }
    // });
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