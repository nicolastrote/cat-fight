// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

// Require external modules
const mongoose = require('mongoose');

// Connect to MongoDB with Mongoose
mongoose
    .connect('mongodb://localhost/cat-fight')
    .then(() => console.log(
        '\n\n'+
        '     /\\_/\\  \n'+
        '    ( o o ) MongoDB connected...\n' +
        '           _         __ _       _     _   \n' +
        '  ___ __ _| |_      / _(_) __ _| |__ | |_ \n' +
        ' / __/ _` | __|____| |_| |/ _` | `_ \\| __|\n' +
        '| (_| (_| | |______|  _| | (_| | | | | |_ \n' +
        ' \\___\\__,_|\\__|    |_| |_|\\__, |_| |_|\\__|\n' +
        '                          |___/           \n' +
        ' Let\'s rules the world  \n'
    ))
    .catch(err => console.log(err));

module.exports = fastify;
