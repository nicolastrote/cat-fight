// External Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const breedSchema = new Schema({
    adaptability: {type: Number, required: true, main: 1, max: 5},
    affection_level: {type: Number, required: true, main: 1, max: 5},
    alt_names: {type: String, required: false, max: 100},
    child_friendly: {type: Number, required: true, main: 1, max: 5},
    country_code: {type: String, required: true, max: 100},
    country_codes: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100},
    dog_friendly: {type: Number, required: true, main: 1, max: 5},
    energy_level: {type: Number, required: true, main: 1, max: 5},
    experimental: {type: Boolean, required: true},
    grooming: {type: Number, required: true, main: 1, max: 5},
    hairless: {type: Boolean, required: true},
    health_issues: {type: Number, required: true, main: 1, max: 5},
    hypoallergenic: {type: Boolean, required: true},
    id: {type: String, required: true, max: 100},
    indoor: {type: Number, required: true, main: 1, max: 5},
    intelligence: {type: Number, required: true, main: 1, max: 5},
    lap: {type: Number, required: true, main: 1, max: 5},
    life_span: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    natural: {type: Boolean, required: true},
    origin: {type: String, required: true, max: 100},
    rare: {type: Boolean, required: true},
    rex: {type: Boolean, required: true},
    shedding_level: {type: Number, required: true, main: 1, max: 5},
    short_legs: {type: Boolean, required: true},
    social_needs: {type: Number, required: true, main: 1, max: 5},
    stranger_friendly: {type: Number, required: true, main: 1, max: 5},
    suppressed_tail: {type: Boolean, required: true},
    temperament: {type: String, required: true, max: 100},
    vocalisation: {type: Number, required: true, main: 1, max: 5},
    weight: {
        imperial: {type: String, required: true, max: 100},
        metric: {type: String, required: true, max: 100}
    },
    wikipedia_url: {type: String, required: true, max: 100}
});

module.exports = mongoose.model('Breed', breedSchema);
