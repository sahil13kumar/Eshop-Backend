const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }] ,
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        max: 255,
        min: 0
    },
    rating: {
        type: Number,
        default: 0    
    },
    numReviews: {
        type: Number,
        default: 0
    },
    isFeatuerd: {
        type: Boolean,
        default: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,

    }
})


productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema);
