var mongoose = require('mongoose');

var submitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
    
});

var Submit = mongoose.model('Submit', submitSchema);

module.exports = Submit;