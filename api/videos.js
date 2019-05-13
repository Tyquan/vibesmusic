const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const Video = require('../models/video');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	Video.find({}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			throw err;
		} else {
			res.status(200).json(doc);
		}
	});
});

/* GET home page. */
router.get('/latest', function(req, res, next) {
	Video.find({}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			throw err;
		} else {
			res.status(200).json(doc[0]);
		}
	});
});

router.get("/topfive", (req, res, next) => {
	Video.find({}).sort({views: -1}).limit(5).exec((err, data) => {
		if (err) {
			next(err);
		} else {
			res.status(200).json(data);
		}
	});
});


router.get('/latest_news', (req, res, next) => {
	Video.find({category: "News"}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			next(err);
		} else {
			res.status(200).json(doc[0]);
		}
	});
});

router.get('/latest_interviews', (req, res, next) => {
	Video.find({category: "Interview"}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			next(err);
		} else {
			let docs = [];
			for (let i = 0; i < doc.length; i++) {
				if (docs.length < 3) {
					docs.push(doc[i]);
				}
			}
			res.status(200).json(docs);
		}
	});
});

router.get('/latest_podcasts', (req, res, next) => {
	Video.find({category: "Podcast"}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			next(err);
		} else {
			let docs = [];
			for (let i = 0; i < doc.length; i++) {
				if (docs.length < 3) {
					docs.push(doc[i]);
				}
			}
			res.status(200).json(docs);
		}
	});
});

router.get('/latest_ten', function(req, res, next) {
	Video.find({category: "HipHop"}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			throw err;
		} else {
			let docs = [];
			for (let i = 0; i < doc.length; i++) {
				if (docs.length < 27) {
					docs.push(doc[i]);
				}
			}
			res.status(200).json(docs);
		}
	});
});

router.get('/latest_rb', function(req, res, next) {
	Video.find({category: "RB"}).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			throw err;
		} else {
			let docs = [];
			for (let i = 0; i < doc.length; i++) {
				if (docs.length < 2) {
					docs.push(doc[i]);
				}
			}
			res.status(200).json(docs);
		}
	});
});

router.get('/showvideo/:id', (req, res, next) => {
    Video.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
        	showDate = moment(data.date_created).format('MMMM Do YYYY, h:mm a');
        	console.log(data);
        	res.status(200).json(data);
        }
    });
});

router.get('/recommendations/showvideo/:id', (req, res, next) => {
  Video.findById(req.params.id, (err, data) => {
      if (err) {
          throw err;
      } else {
      	Video.find({category: data.category}).sort({date_created: -1}).exec((err, result) => {
      		if (err) {
      			throw err;
      		} else {
      			res.status(200).json(result);
      		}
      	});
      }
  });
});

module.exports = router;