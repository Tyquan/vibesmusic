var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    comments: [{
        body: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        date_created: {
            type: Date,
            default: Date.now
        }
    }]
}, {
  usePushEach: true
});

var Video = mongoose.model('Video', videoSchema);

module.exports = Video;