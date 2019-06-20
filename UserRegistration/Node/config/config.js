// Check the environment
// save the environment in env variable
// We can pass value for this NODE_ENV when we start this application
// https://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x
var env = process.env.NODE_ENV || 'development';

// Fetch config data from config.json
var config = require('./config.json');
// Based on config we'll have development an production data
// env == development, production
var envConfig = config[env];

// add env. config values to process.env
/*
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
1. Object.keys(object1).forEach(key => console.log(object1[key]))
Returns indivisual values of each keys in the object
> "somestring"
> 42
> false
2. Object.values(object1)
Returns entire values of object as an array
> Array ["somestring", 42, false]

*/
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

