const express = require('express');
const mongoose = require('mongoose')
const Video = require('../models/Video');
const router = express.Router();

// Get all Videos
router.get('/', (req, res, next) => {
	Video.find({}, (err, result) => {
		if (err)
			return next(err);
		res.status(201).json(result);
	});
});

// Get Single Video
router.get('/:id', (req, res, next) => {
	Video.findOne({_id: req.params.id}, (err, result) => {
		if (err)
			return next(err);
		if (!result)
			return next(new Error('Video Not Found'));
		res.status(200).json(result);
	});
});

// Create a video
router.post('/', (req, res, next) => {
	if (!req.session.user)
    return next(new Error("You must be logged in"));
  req.session.user.findOneAndUpdate({_id: ObjectId(req.session.user.id)}, {$addToSet: {videos: req.body}}, {returnOriginal: true}, (err, result) => {
  	if (result && result.value == null) {
  		return next(new Error('Over the save limit, or story already saved.'));
  	} else if (err) {
  		console.log("+++POSSIBLE CONTENTION ERROR?+++ err:", err);
  		return next(err);
  	}
  	res.status(200).json(result.value);
  });
});

// Delete a video
router.delete('/:id', (req, res, next) => {
	if (!req.session.user)
    return next(new Error("You must be logged in"));
  Video.findOneAndDelete({_id: req.params.id}, (err, result) => {
  	if (err)
  		return next(err);

  });;
});

module.exports = router;