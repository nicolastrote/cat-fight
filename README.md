# cat-fight
Project cat-fight

Best practises around a simple but attracting app where cats are fighting for rule the world.

![alt text](https://github.com/nicolastrote/cat-fight/blob/master/cat-fight.jpg)

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
    * brew: https://brew.sh/
    * `brew update && brew upgrade` (update for already installed packages)
    * `brew install nodejs yarn`
    * postman: https://www.getpostman.com/downloads/
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


### Licences
* `yarn global add yo && yarn global add generator-license-cc`
* `yo license-cc`
* I chose CC-BY-NC-SA-4.0 to protect mostly my sharing code
