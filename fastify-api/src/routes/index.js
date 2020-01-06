// Import our Controllers
const breedController = require('../controllers/breedController');

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routes = [
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
        method: 'PUT',
        url: '/api/breeds/:id',
        handler: breedController.updateBreed
    },
    {
        method: 'DELETE',
        url: '/api/breeds/:id',
        handler: breedController.deleteBreed
    }
];

module.exports = routes;
