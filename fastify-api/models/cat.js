const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const catModel = new Schema({
    alt_names: {type: String, required: false, max: 100},
    breed_id: {type: ObjectId},
    description: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    users_id: [{type: ObjectId, required: false}],
    wikipedia_url: {type: String, max: 100},
    instagram_url: {type: String, max: 100}
});

module.exports = mongoose.model('Cat', catModel);
