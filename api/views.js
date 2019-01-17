const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const Video = require('../models/video');
const router = express.Router();

router.get('/showvideo/:id', (req, res, next) => {
    Video.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
        	data.views = data.views + 1;
        	data.save().then((result) => {
        		res.status(200).json(data);
        	}).catch((err) => {
        		throw err;
        	});
        }
    });
});

module.exports = router;