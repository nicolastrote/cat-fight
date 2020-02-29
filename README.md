# cat-fight

Project cat-fight

Best practises around a simple but attracting app where cats are fighting for rule the world.

![alt text](https://github.com/nicolastrote/cat-fight/blob/master/assets/cat-fight.jpg)

## Table of contents

- [Sources](#sources)
- [Prior](#prior)
- [Github](#github)

- [Backend Implementation](#backend-implementation)

  - [Gitignore](#gitignore)
  - [Licences](#licences)
  - [Server Packages](#server-packages)
  - [Set Up Nodemon](#set-up-nodemon)
  - [Setup Up The Server](#setup-up-the-server)
  - [MongoDB Setup](#mongodb-setup)
    - [MongoDB Install](#mongodb-install)
    - [Backup Of Mongodb](#backup-of-mongodb)
    - [Robo-3T Install](#robo-3t-install)
  - [MongoDB Models](#mongodb-models)
  - [Controller For Breed Cat Model](#controller-for-breed-cat-model)
  - [Routes For Breed Cat CRUD](#routes-for-breed-cat-CRUD)
  - [Testing The REST API](#testing-the-rest-api)
  - [Swagger](#swagger)
  - [Refactoring Connexion](#refactoring-connexion)
  - [MongoDB New Model](#mongodb-new-model)

- [Frontend Implementation](#frontend-implementation)
  - [React Basic Architecture](#react-basic-architecture)
  - [SCSS](#scss)
  - [ESLint & Prettier](#eslint-&-prettier)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
    - [Activate ESLint In Webstorm](#activate-eslint-in-webstorm)
    - [Pre-commit](#pre-commit)
  - [Favicon](#favicon)

## Sources

- REST API/NodeJS+Mongodb:
  - Part1: https://www.freecodecamp.org/news/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9/
  - Part2: https://medium.com/better-programming/how-to-build-a-blazing-fast-graphql-api-with-node-js-mongodb-and-fastify-77fd5acd2998
- GraphQL: https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
- React:
  - Bootstrap: https://medium.com/better-programming/how-to-make-a-responsive-app-with-react-and-bootstrap-938a22dac9d4
  - Bootstrap: https://medium.com/javascript-in-plain-english/how-to-use-bootstrap-with-react-3bab2b35564e
  - GraphQL + Apollo: https://medium.com/future-vision/react-apollo-c952fdc6d2a7
  - Call Axios: https://medium.com/better-programming/the-modern-way-to-use-promise-based-http-requests-axios-hooks-f00791345a37

## Prior

- here is tools I will use during this tutorial:
  - iTerm2: https://www.iterm2.com/downloads.html
  - XCode from MacOs
  - brew: https://brew.sh/
  - `brew update && brew upgrade` (update for already installed packages)
  - NodeJS and Yarn: `brew install nodejs yarn`
  - postman:
    - `brew cask install postman`
    - import in postman collections from: cat-fight/fastify-api/postman/Backup.postman_dump.json
- create a repo named "cat-fight" on git without the licence you need

## Github

- open iTerm2 and `cd ~ && mkdir Workspacecd && cd ~/Workspace`
- `yarn init`
- `git clone https://github.com/nicolastrote/cat-fight.git && cd cat-fight`

## Backend Implementation

source: https://www.freecodecamp.org/news/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9/

We will implement NodeJS, MongoDB, Mongoose, Fastify, Swagge and Postman.

- `cd ~/Workspace/cat-fight/ && mkdir fastify-api`
- `cd fastify-api && mkdir src && cd src`
- `touch index.js && yarn init`

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

- `yarn global add yo && yarn global add generator-license-cc`
- `yo license-cc`
- I chose CC-BY-NC-SA-4.0 to protect mostly my sharing code

### Server Packages

- `yarn add nodemon mongoose fastify fastify-swagger boom`

### Set Up Nodemon

- **nodemon** : tool which reload nodejs server when you save new code
- **mongoose** : coding library for mongodb
- **fastify** : web framework to deliver small and smart nodejs services
- **fastify-swagger** : documentation generator using swagger tool.
- **boom** : utility tool for HTTP errors

* `nano package.json`
* add :

```text
"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js ./src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Setup Up The Server

- add in index.js :

```javascript
// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true
});

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

- you can start the server:
  `yarn start`
- and see the first result at http://localhost:3000/
  you should read : {"hello":"world"}

### MongoDB Setup

#### MongoDB Install

source : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

- `brew tap mongodb/brew && brew install mongodb-community@4.2`

install creates:

- the configuration file (/usr/local/etc/mongod.conf)
- the log directory path (/usr/local/var/log/mongodb)
- the data directory path (/usr/local/var/mongodb)

For running MongoDB:

- Start : `brew services start mongodb-community@4.2`
- For running MongoDB as a background process : `mongod --config /usr/local/etc/mongod.conf --fork`
- To test if is running : `ps aux | grep -v grep | grep mongod`
- connexion: `mongo`

\_**\_With MongoDB, we do not need to create a database.
We can just specify a name in the setup and as soon as we store data, MongoDB will create this database for us.\_\_**

- add in index.js the connexion:

```javascript
// Require external modules
const mongoose = require("mongoose");

// Connect to MongoDB with Mongoose
mongoose
  .connect("mongodb://localhost/cat-fight")
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));
```

and run `yarn start` if you stop it before. You will see the new message: MongoDB connected...

##### Backup Of Mongodb

source : https://www.tutorialspoint.com/mongodb/mongodb_create_backup.htm

```shell script
cd ~/Workspace/cat-fight/fastify-api/mongodb/
sudo mongodump
```

##### Restore Of Mongodb

```shell script
sudo mongorestore
```

#### Robo-3T Install

Robo-3T is an utility app that allows you to manage MongoDB graphically.

- `brew cask install robo-3t`
  You can find it and run it in your mac launcher of apps, and create a new connexion with default values.

### MongoDb Models

- create a new folder under src/ named "models"
- and a file named : breed.js
- look at breed.js file for the cat breed model details.

### Controller For Breed Cat Model

- create a new folder under src/ named "controllers"
- and a file named : breedController.js
- look at breedController.js file for the cat breed CRUD controller details.

### Routes For Breed Cat CRUD

- create a new folder under src/ named "routes"
- and a file named : index.js
- look at index.js file for routes details.

- and connect routes with the code by adding/replace the following line of code to the src/index.js file:

```
const routes = require(‘./routes’);
[...]
// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
});
[...]
```

### Testing The REST API

- in Chrome we can test the URL: http://localhost:3000/api/breeds, because we have no data, it should reply en empty array: []
- Open postman, click on "new request", add in GET input "http://localhost:3000/api/breeds" and push "SEND" button.
  You should receive the same response, an empty array.
  ![alt text](https://github.com/nicolastrote/cat-fight/blob/master/assets/postman.jpg)
  At this state, you can save this request and put it in a collection named "cat-fights".

nb: put breed information declaration as "RAW" + "JSON" in Postman.

- GET ALL : GET + http://localhost:3000/api/breeds
- GET ONE : GET + http://localhost:3000/api/breeds/[id]
- POST : POST + http://localhost:3000/api/breeds + raw json info
- DELETE : DELETE + http://localhost:3000/api/breeds/[id]
- UPDATE: PUT + http://localhost:3000/api/breeds/[id] + new raw json info

### Swagger

- create a new folder under src/ named "config"
- and a file named : swagger.js with :

```javascript
exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Fastify API",
      description:
        "Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger",
      version: "1.0.0"
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here"
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"]
  }
};
```

This code is an object with all options for fastify-swagger plugin.
For giving this object, add the following in ~/src/index.js file:

```
await fastify.listen(3000)
fastify.swagger()
fastify.log.info(`listening on ${fastify.server.address().port}`)
```

### Refactoring Connexion

source: https://medium.com/better-programming/how-to-build-a-blazing-fast-graphql-api-with-node-js-mongodb-and-fastify-77fd5acd2998

- create a new file under src/ named "server.js" :

```javascript
// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true
});

// Require external modules
const mongoose = require("mongoose");

// Connect to MongoDB with Mongoose
mongoose
  .connect("mongodb://localhost/cat-fight")
  .then(() =>
    console.log(
      "  /\\_/\\  \n" +
        " ( o o ) MongoDB connected...\n" +
        "              _         __ _       _     _   \n" +
        "     ___ __ _| |_      / _(_) __ _| |__ | |_ \n" +
        "    / __/ _` | __|____| |_| |/ _` | `_ \\| __|\n" +
        "   | (_| (_| | |______|  _| | (_| | | | | |_ \n" +
        "    \\___\\__,_|\\__|    |_| |_|\\__, |_| |_|\\__|\n" +
        "                             |___/           \n"
    )
  )
  .catch(err => console.log(err));
```

- Now we need to delete this code in index.js, and import it :

```
// Import Server
const fastify = require('./server.js');
```

### MongoDB New Model

- At this step I need to put more models in the database. I will start with a cats, user and services tables :

  - breeds: content all breed cat information
  - cats: content information from a specific car which have owner(s)
  - services: content information services for on cat (ie: birthday, vaccine date, ...)
  - user: information from the connected user, which have a cat or not!

  Here is the simple model:
  ![alt text](https://github.com/nicolastrote/cat-fight/blob/master/assets/schema.jpg)

- add in the model src/models/breed : `cats_id: [{type: ObjectId}],`
- create a src/models/cat.js file with:

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const catSchema = new Schema({
  alt_names: { type: String, required: false, max: 100 },
  breed_id: { type: ObjectId },
  description: { type: String, required: true, max: 100 },
  id: { type: String, required: true, max: 100 },
  name: { type: String, required: true, max: 100 },
  users_id: [{ type: ObjectId }],
  wikipedia_url: { type: String, max: 100 }
});

module.exports = mongoose.model("Cat", catSchema);
```

- create a src/models/catServices.js file with:

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const catServicesSchema = new Schema({
  cat_id: { type: ObjectId },
  date: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  name: { type: String, required: true, max: 100 }
});

module.exports = mongoose.model("CatServices", catServicesSchema);
```

## Frontend Implementation

### React Basic Architecture

- creation of the frontend folder named react-app:

```shell script
 cd ~/Workspace/cat-fight/
 yarn create react-app react-app --template typescript
```

- we will change the default port 3000 for 4200 in the package.json:

```
    "start": "PORT=4200 react-scripts start",
```

### SCSS

https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet
• yarn add node-sass
• rename src/App.css to src/App.scss
• update src/App.tsx to import src/App.scss
• This file and any other file will be automatically compiled if imported with the extension .scss.

### ESLint & Prettier

#### ESLint

We will controle the write rules in our application with :

- eslint: The core ESLint linting library
- @typescript-eslint/parser: The parser that will allow ESLint to lint TypeScript code
- @typescript-eslint/eslint-plugin: A plugin that contains a bunch of ESLint rules that are TypeScript specific

Let's install this:

```shell script
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react @types/react
```

Create react-app/.eslintrc.js and add inside :

```shell script
nano .eslintrc.js
```

add :

```javascript
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser

  // Extend without prettier
  // extends:  [
  //  'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
  //  'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  //],

  // Extend WITH prettier
  extends: [
    "plugin:react/recommended", // Usefull to avoid error of Modules import
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
```

#### Prettier

Prettier handling code formatting in IDE:

- prettier: The core prettier library
- eslint-config-prettier: Disables ESLint rules that might conflict with prettier
- eslint-plugin-prettier: Runs prettier as an ESLint rule

```shell script
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier pretty-quick
nano .prettierrc.js
```

#### Activate ESLint In Webstorm

Go on : https://www.jetbrains.com/help/webstorm/eslint.html

#### Pre-commit

```shell script
yarn add -D lint-staged husky
```

add in package.json

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint",
    "pretty-quick — staged"
  ]
},
```

### Favicon

You will have to create in public logos of 512px and 192px, and a favicon.ico (64/32/24/16px).
And change informations about the website in index.html and manifest.json.

## BootStrap Axios Translation

```shell script
yarn add -D axios bootstrap i18next i18next-browser-languagedetector i18next-xhr-backend querystring react-bootstrap react-i18next react-router-dom @types/react-router-dom
```
