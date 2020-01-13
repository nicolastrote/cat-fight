const boom = require('boom');

// Get Data Models
const BreedModel = require('../models/breed');

// Get all breeds
exports.getBreeds = async () => {
    try {
        return await BreedModel.find();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Get single breed by ID
exports.getSingleBreed = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const singleBreed = await BreedModel.findById(id);

        return singleBreed ? singleBreed : {};
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Add a new breed
exports.addBreed = async req => {
    try {
        const body = req.body === undefined ? req : req.body;
        const breed = new BreedModel(body);
        const doesItAlreadyExist = await BreedModel.findOne({ name: body.name });

        if (doesItAlreadyExist) {
            return new Error('Breed name already exist')
        } else {
            const breedAdded = await breed.save();
            console.log('breedAdded', breedAdded);

            return breedAdded;
        }

    } catch (err) {
        throw boom.boomify(err);
    }
};

// Add new breed List
exports.addBreedList = async req => {
    try {
        const body = req.body === undefined ? req : req.body;
        const BreedListMap = await body.map( async (breed, index) => {
            const newBreed = new BreedModel(breed);
            const newAddedBreed = await newBreed.save();

            return newAddedBreed;
        });

        return BreedListMap;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Update an existing breed
exports.updateBreed = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const updateData = req.params === undefined ? req : req.params;

        return await BreedModel.findByIdAndUpdate(id, updateData, {new: true});
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Delete a breed
exports.deleteBreed = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await BreedModel.findByIdAndRemove(id);
    } catch (err) {
        throw boom.boomify(err);
    }
};
