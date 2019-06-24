Step 1: Initialize the project
    a. Create a new NodeJs app by running npm init
    b. Install Express, Mongoose, Body-Parser BcryptJS and CORS.
        (npm i --save express mongoose body-parser bcryptjs cors)

Step 2: Save and Make use of configuration details like Port Number, MongoDB uri in NodeJs project. This is for production and Development.
    a. Create a config.json file
    b. Add the Port Number and MongoDB Uri for Development and Production(production data will be updated once we deploy the data)
    c. Configure the NodeJs API using these config data, so we add a JS file config.js
    d. Firstly in the file we'll check the environment(Development or Production)
    e. Fetch config data from config.json
    f. Now we'll Configure this NodeJs api using this configuration data for which we'll use process.env key value structure

Step 3: Create app.js and model.js to connect to MongoDB
    a. Create app.js and require config.js
    b. We add config.js so that app.js will execute the file and so we'll set values for configuration.
Step 4. Create a model folder and add db.js
    a. Added mongoose
    b. mongoose.connect() to establish a connection with MongoDB.
    c. We need to pass the mongodb uri for that we can use the structure process.env.MONGODB_URI

Step 5. In app.js
    a. Add express, body-parser, cors, and add variable app and assign express();
            var app = express();
    b. Add middleware body-parser as json, 
            app.use(bodyParser.json());
            we use app.use function to configure middleware forthe application
            we add bodyParser.json() so that we can pass json data in the node application
            we enable cors to this application as node will run on Portnumber 3000 and angular 6 will run on 4200
            In order to communicate with them we enable CORS
    c. Finally we start the express server by executing app.listen and inside we pass the Portnumber

Step 6: We Create a new Model user.model.js
    a. We Create a new mongoose Schema and mention all the fields required
    b. Register this userschema object in the mongoose so we call the mongoose.model Schema
        b.1. First Parameter we have the model name which is 'User'
        b.2. Second Parameter we have the Schema object
        b.3. If we save records using this Schema, it will be saved in a collection named 'User'
    c. In order to execute this model we need to add an import statement in db.js file

Step 7: Make a controller folder and add user.controller.js
    a. We need to define a function for user registration or signup
    b. module.exports.functionName(module.exports.register)

Step 8: Make a router folder and add index.router.js
    a. We will route common routes inside the application
    b. Add the router function from Express module
    c. Add userController.js to the index.router.js
    d. Create a controller in index.router.js
    e. Add index.router.js in app.js
    f. Using this constant of index.router.js we configure the middleware(
            const rtsIndex = require('./routes/index.router')).
    g. 
