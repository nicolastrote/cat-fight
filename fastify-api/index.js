// Import Server
const fastify = require('./server.js');

// Import Routes
const routes = require('./routes');

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
});

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0');
        fastify.swagger();
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
