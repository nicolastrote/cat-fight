// External Dependencies
const boom = require('boom');

// Get Data Models
const BreedModel = require('../models/Breed');

// Get all breeds
exports.getBreeds = async (req, reply) => {
    try {
        return await BreedModel.find();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Get single breed by ID
exports.getSingleBreed = async (req, reply) => {
    try {
        const id = req.params.id;

        return await BreedModel.findById(id);
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Add a new breed
exports.addBreed = async (req, reply) => {
    try {
        const breed = new BreedModel(req.body);

        return breed.save();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Update an existing breed
exports.updateBreed = async (req, reply) => {
    try {
        const id = req.params.id;
        const breed = req.body;
        const { ...updateData } = breed;

        return await BreedModel.findByIdAndUpdate(id, updateData, {new: true});
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Delete a breed
exports.deleteBreed = async (req, reply) => {
    try {
        const id = req.params.id;

        return await BreedModel.findByIdAndRemove(id);
    } catch (err) {
        throw boom.boomify(err);
    }
};
