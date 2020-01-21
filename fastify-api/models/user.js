const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userModel = new Schema({
    cats_id: [{type: ObjectId}],
    firstName: {type: String, required: true, max: 100},
    surname: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    birthDate: {type: String, required: false, max: 100},
    addressLine1: {type: String, required: false, max: 100},
    addressLine2: {type: String, required: false, max: 100},
    city: {type: String, required: false, max: 100},
    state: {type: String, required: false, max: 100},
    zip: {type: String, required: false, max: 100},
    country: {type: String, required: false, max: 100}
});

module.exports = mongoose.model('User', userModel);
