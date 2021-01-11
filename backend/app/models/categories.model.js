const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    bucketName: String,
    items: [{
        itemName: String,
        status:Boolean
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);
