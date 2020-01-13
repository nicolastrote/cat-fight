const breedController = require('../controllers/breedController');
const catController = require('../controllers/catController');
const userController = require('../controllers/userController');
// Import Swagger documentation
// const documentation = require('./documentation/carApi');

const routes = [
    // BREEDS
    {
        method: 'GET',
        url: '/api/breeds',
        handler: breedController.getBreeds
    },
    {
        method: 'GET',
        url: '/api/breeds/:id',
        handler: breedController.getSingleBreed
    },
    {
        method: 'POST',
        url: '/api/breeds',
        handler: breedController.addBreed,
        // schema: documentation.addBreedSchema
    },
    {
        method: 'POST',
        url: '/api/breedList',
        handler: breedController.addBreedList,
        // schema: documentation.addBreedSchema
    },
    {
        method: 'PUT',
        url: '/api/breeds/:id',
        handler: breedController.updateBreed
    },
    {
        method: 'DELETE',
        url: '/api/breeds/:id',
        handler: breedController.deleteBreed
    },
    // CATS
    {
        method: 'GET',
        url: '/api/cats',
        handler: catController.getCats
    },
    {
        method: 'GET',
        url: '/api/cats/:id',
        handler: catController.getSingleCat
    },
    {
        method: 'POST',
        url: '/api/cats',
        handler: catController.addCat,
        // schema: documentation.addCatSchema
    },
    {
        method: 'POST',
        url: '/api/catList',
        handler: catController.addCatList,
    },
    {
        method: 'DELETE',
        url: '/api/cats/:id',
        handler: catController.deleteCat
    },
    // USERS
    {
        method: 'GET',
        url: '/api/users',
        handler: userController.getUsers
    },
    {
        method: 'GET',
        url: '/api/users/:id',
        handler: userController.getSingleUser
    },
    {
        method: 'GET',
        url: '/api/users/cats/:id',
        handler: userController.getUsersCats
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: userController.addUser,
        // schema: documentation.addCatSchema
    },
    {
        method: 'DELETE',
        url: '/api/users/:id',
        handler: userController.deleteUser
    }
];

module.exports = routes;
