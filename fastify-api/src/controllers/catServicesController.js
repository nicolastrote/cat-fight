const boom = require('boom');

import CatServices from '../models/catServices';

// Get single service ID
exports.getSingleService = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await CatServices.findById(id);
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Get single car's services
exports.getCarsServices = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;

        return await CatServices.find({ car_id: id });
    } catch (err) {
        throw boom.boomify(err)
    }
};
