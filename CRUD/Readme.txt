Step 1: Go to Node Folder
Create a Node Folder and type "npm init" and it will create a package.json file

Step 2:
Required to install Npm packages
    a. Express to act as a server,
    b. Mongoose to work as MongoDB ORM
    c. Body-parser to allow us to send JSON data to NodeJs API
Code-> npm i express mongoose body-parser --save to save dependencies in the package.json file

Step 3:
Connect MongoDB to this project
Created a new file db.js
    a. Import Mongoose
    b. Connect to my DB
    c. export module

Step 4: Create a root JS file index.js
    a. Import express and body-parser
    b. Import(require) db.js
    c. Use body-parser to send/retrive data to this NodeJs project
    d. start server

Step 5: Create a model using Mongoose package
    a. Import mongoose
    b. Create a Mongoose model
    c. Add the schema/structure of our model
    d. export module as module.export = {Employee}

Step 6: Implement CRUD Operations Controller
    6.1. GET Request to retrive all the data from MongoDB and create a controller to access the values
        a. Create a "controller" Folder
        b. Create employeeController.js
        c. Import Express and Implement the router from Express also add the Employee Model
        d. add a router.get Request to retrive all the Employee
        e. Employee.find() to get all the docs
        f. export the router module
        g. In index.js add a require statement for employeeController
        h. add app.use('/employees', employeeController);
        i. access in browser at localhost:3000/employees
    6.2 POST Request to submit all the Employee data.
        a. Created a router.post method
        b. Create an Employee model
        c. Then add .save method to save the data
        d. if no err send the doc.
    6.3 GET request to retrive all the data using userID
        a. Create a router.get method with :id/ as controller uri
        b. We need to check if the id passed is valid mongoDB id or not, so we add 
            var ObjectId = require('mongoose').Types.ObjectId
        c. Add Employee.findByID method to get the specific Doc
    6.4 PUT method to submit updated value
        a. Create a router.put method and id is passed to uri as :id/
        b. Check if ID is valid or not
        c. Create an Object not of Employee Class but a normal object(named as emp)
        d. Add Employee.findByIdAndUpdate and pass 3 params
            i. {$set: emp}
            ii. {new: true}
            iii. (err, doc)=>{...}
    6.5 Delete method to Delete a document
        a. Create a router.delete method and id is passed to uri as :id/
        b. Check if ID is valid or not
        c. Employee.findByIdAndRemove and pass the req.params.id