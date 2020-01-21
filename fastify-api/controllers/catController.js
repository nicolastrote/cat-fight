const boom = require('boom');

const CatModel = require('../models/cat');


// Get cats list
exports.getCats = async () => {
    try {
        return await CatModel.find();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Get single cat by ID
exports.getSingleCat = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const singleCat = await CatModel.findById(id);

        return singleCat ? singleCat : {};
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Add a new cat
exports.addCat = async req => {
    try {
        const body = req.body === undefined ? req : req.body;
        const cat = new CatModel(body);
        const doesItAlreadyExist = await CatModel.findOne({ name: body.name });

        if (doesItAlreadyExist) {
            return new Error('Cat name already exist')
        } else {
            const catAdded = await cat.save();

            return catAdded;
        }

    } catch (err) {
        throw boom.boomify(err);
    }
};

// Add new cat List
exports.addCatList = async req => {
    try {
        const body = req.body === undefined ? req : req.body;
        const catListMap = await body.map( async (breed, index) => {
            const newCat = new CatModel(breed);
            const newAddedCat = await newCat.save();

            return newAddedCat;
        });

        return catListMap;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Delete a cat
exports.deleteCat = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await CatModel.findByIdAndRemove(id);
    } catch (err) {
        throw boom.boomify(err);
    }
};
