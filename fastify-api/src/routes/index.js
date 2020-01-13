const breedController = require('../controllers/breedController');
const catController = require('../controllers/catController');
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
    }
];

module.exports = routes;
