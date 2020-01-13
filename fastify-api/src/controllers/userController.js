const boom = require('boom');

// Get Data Models
const User = require('../models/User');
const Cat = require('../models/Cat');

// Get all users
exports.getUsers = async () => {
    try {
        return await User.find();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Get single user by ID
exports.getSingleUser = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await User.findById(id);
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Get single user's cats
exports.getUsersCats = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await Cat.find({owner_id: id});
    } catch (err) {
        throw boom.boomify(err)
    }
};
