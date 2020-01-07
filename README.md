# cat-fight
Project cat-fight

Best practises around a simple but attracting app where cats are fighting for rule the world.

![alt text](https://github.com/nicolastrote/cat-fight/blob/master/cat-fight.jp2)

## Sources
* REST API/NodeJS+Mongodb: 
  * Part1: https://www.freecodecamp.org/news/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9/
  * Part2: https://medium.com/better-programming/how-to-build-a-blazing-fast-graphql-api-with-node-js-mongodb-and-fastify-77fd5acd2998
* GraphQL: https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
* React: 
    * Bootstrap: https://medium.com/better-programming/how-to-make-a-responsive-app-with-react-and-bootstrap-938a22dac9d4
    * Bootstrap: https://medium.com/javascript-in-plain-english/how-to-use-bootstrap-with-react-3bab2b35564e
    * GraphQL + Apollo: https://medium.com/future-vision/react-apollo-c952fdc6d2a7
    * Call Axios: https://medium.com/better-programming/the-modern-way-to-use-promise-based-http-requests-axios-hooks-f00791345a37 

## Prior
* here is tools I will use during this tutorial:
    * iTerm2: https://www.iterm2.com/downloads.html
    * XCode from MacOs
    * brew: https://brew.sh/
    * `brew update && brew upgrade` (update for already installed packages)
    * `brew install nodejs yarn`
    * postman: `brew cask install postman`
* create a repo named "cat-fight" on git without the licence you need

## GITHUB
* open iTerm2 and `cd ~ && mkdir Workspacecd && cd ~/Workspace`
* `yarn init`
* `git clone https://github.com/nicolastrote/cat-fight.git && cd cat-fight`

## PART 1 : NodeJS/MongoDB/Mongoose/Fastify/Swagger/Postman
source: https://www.freecodecamp.org/news/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9/

* `cd ~/Workspace/cat-fight/ && mkdir fastify-api`
* `cd fastify-api && mkdir src && cd src`
* `touch index.js && npm init`

### Gitignore
```shell script
$ touch .gitignore && $ git config --global core.excludesFile ~/.gitignore
$ nano .gitignore
```
and ignore those files/folders:
```gitignore
# ide
.idea/

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
### Licences
* `yarn global add yo && yarn global add generator-license-cc`
* `yo license-cc`
* I chose CC-BY-NC-SA-4.0 to protect mostly my sharing code

### Server packages
* `yarn add nodemon mongoose fastify fastify-swagger boom`

### Set up Nodemon
- __nodemon__ : tool which reload nodejs server when you save new code
- __mongoose__ : coding library for mongodb
- __fastify__ : web framework to deliver small and smart nodejs services
- __fastify-swagger__ : documentation generator using swagger tool.
- __boom__ : utility tool for HTTP errors

* `nano package.json`
* add : 
```text
"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js ./src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Setup up the server
* add in index.js :
```javascript
// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
```

* you can start the server:
 `npm start`
* and see the first result at http://localhost:3000/
you should read : {"hello":"world"}

### MongoDB Setup
#### MongoDB Install
source : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
* `brew tap mongodb/brew && brew install mongodb-community@4.2`

install creates:
- the configuration file (/usr/local/etc/mongod.conf)
- the log directory path (/usr/local/var/log/mongodb)
- the data directory path (/usr/local/var/mongodb)

For running MongoDB:
* Start : `brew services start mongodb-community@4.2`
* For running MongoDB as a background process : `mongod --config /usr/local/etc/mongod.conf --fork`
* To test if is running : `ps aux | grep -v grep | grep mongod`
* connexion: `mongo`

____With MongoDB, we do not need to create a database. 
We can just specify a name in the setup and as soon as we store data, MongoDB will create this database for us.____

- add in index.js the connexion:
```javascript
// Require external modules
const mongoose = require('mongoose');

// Connect to MongoDB with Mongoose
mongoose
    .connect('mongodb://localhost/cat-fight')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
```

and run `npm start` if you stop it before. You will see the new message: MongoDB connected...

#### Robot-3T Install
Robot-3T is an utility app that allows you to manage MongoDB graphically.
* `brew cask install robot-3t`
You can find it and run it in your mac launcher of apps, and create a new connexion with default values.

#### MongoDb models
* create a new folder under src/ named "models"
* and a file named : breed.js
* look at breed.js file for the cat breed model details.

#### Controller for breed cat model
* create a new folder under src/ named "controllers"
* and a file named : breedController.js
* look at breedController.js file for the cat breed CRUD controller details.

#### Routes for breed cat CRUD
* create a new folder under src/ named "routes"
* and a file named : index.js
* look at index.js file for routes details.

* and connect routes with the code by adding/replace the following line of code to the src/index.js file:
```
const routes = require(‘./routes’);
[...]
// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
});
[...]
```

#### Now we are ready to test the REST API
* in Chrome we can test the URL: http://localhost:3000/api/breeds, because we have no data, it should reply en empty array: []
* Open postman,  click on "new request", add in GET input "http://localhost:3000/api/breeds" and push "SEND" button.
You should receive the same response, an empty array.
![alt text](https://github.com/nicolastrote/cat-fight/blob/master/postman.jp2)
