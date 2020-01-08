const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const catServicesSchema = new Schema({
    cat_id: {type: ObjectId},
    date: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('CatServices', catServicesSchema);
