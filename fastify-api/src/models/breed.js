// External Dependencies
const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    adaptability: Number,
    affection_level: Number,
    alt_names: String,
    child_friendly: Number,
    country_code: String,
    country_codes: String,
    description: String,
    dog_friendly: Number,
    energy_level: Number,
    experimental: Number,
    grooming: Number,
    hairless: Number,
    health_issues: Number,
    hypoallergenic: Number,
    id: String,
    indoor: Number,
    intelligence: Number,
    lap: Number,
    life_span: String,
    name: String,
    natural: Number,
    origin: String,
    rare: Number,
    rex: Number,
    shedding_level: Number,
    short_legs: Number,
    social_needs: Number,
    stranger_friendly: Number,
    suppressed_tail: Number,
    temperament: String,
    vocalisation: Number,
    weight: {
        imperial: String,
        metric: String
    },
    wikipedia_url: String
});

module.exports = mongoose.model('Breed', breedSchema);
