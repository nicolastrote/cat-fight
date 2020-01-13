const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userModel = new Schema({
    cats_id: [{type: ObjectId}],
    id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('User', userModel);
