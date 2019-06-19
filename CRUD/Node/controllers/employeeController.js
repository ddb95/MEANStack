const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId
var {
    Employee
} = require('../models/employee');


// localhost:3000/employees/
// Retrieve All Data
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in retrieving Employee Data: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// Submit all Data
router.post('/', (req, res) => {
    // Create an object of employee Model Class
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in saving Employee Data: ' + JSON.stringify(err, undefined, 2));
        }
    })
});

// Get a particular data using ID
router.get('/:id', (req, res) => {
    // to retrieve the data from uri we add var ObjectId = require('mongoose').Types.ObjectId in the beginning
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    }
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in saving Employee Data: ' + JSON.stringify(err, undefined, 2));
        }
    })
});

// Update a Particular document using id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    }
    // Create an Object not of Employee Class but a normal object
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id, {
        $set: emp
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Updating Employee Data: ' + JSON.stringify(err, undefined, 2));
        }
    });
})

// Delete a document by Id
router.delete('/:id', (req, res) => {
    debugger;
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    }
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Deleting Employee Data: ' + JSON.stringify(err, undefined, 2));
        }
    })
})

module.exports = router;