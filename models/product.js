const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    salePrice: {
        type: Number
    },
    taxStatus: {
        type: String
    },
    taxClass: {
        type: String
    },
    sku: {
        type: Number
    },
    stockStatus: {
        type: String
    },
    weight: {
        type: Number
    },
    length: {
        type: Number
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    description: {
        type: String
    },
    shortDescription: {
        type: String
    },
    tags: [{
        type: String
    }],
    categories: [{
        type: String
    }],
    image: {
        type: String
    },
    gallery: [{
        type: String
    }],
    date_created: {
        type: Date,
        default: Date.now
    }
    
});

const Product = mongoose.model('Message', productSchema);

module.exports = Product;