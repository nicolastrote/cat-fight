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

// Get single user's cats
exports.getUserCats = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const user = await UserModel.findById(id);
        // console.log('** user', user);
        const catIdList = user.cats_id;
        console.log('** catIdList', catIdList);

        let catList = catIdList.map(async (cat) => await CatModel.find({_id: cat._id}));

        console.log('** catList', catList);

        // const catJsonList = catIdList.reduce(async (catsJson, catId) => {
        //     const catJson = await CatModel.find({_id: catId});
        //     console.log('** catJson', catJson);
        //     return catsJson.push(catJson);
        // });

        return catList;
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

