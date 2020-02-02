const boom = require('boom');

// Get Data Models
const UserModel = require('../models/user');
const CatModel = require('../models/cat');

// Get all users
exports.getUsers = async () => {
    try {
        return await UserModel.find();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// Get single user by ID
exports.getSingleUser = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await UserModel.findById(id);
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Get from single user Id all his cats
exports.getUserCats = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const user = await UserModel.findById(id);
        const catIdList = user.cats_id;

        return await Promise.all(catIdList.map(async (catId) => await CatModel.findById(catId)));
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Add a new user
exports.addUser = async req => {
    try {
        const body = req.body === undefined ? req : req.body;
        const user = new UserModel(body);
        const doesItAlreadyExist = await UserModel.findOne({ surname: body.surname, name: body.name });

        if (doesItAlreadyExist) {
            return new Error('User name/surname already exist')
        } else {
            const userAdded = await user.save();

            return userAdded;
        }

    } catch (err) {
        throw boom.boomify(err);
    }
};

// Delete a user
exports.deleteUser = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await UserModel.findByIdAndRemove(id);
    } catch (err) {
        throw boom.boomify(err);
    }
};

