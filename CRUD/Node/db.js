// Import mongoose
const mongoose = require('mongoose')

// Connect to db
mongoose.connect('mongodb://localhost:27017/CrudDB', {
        useNewUrlParser: true
    },
    (err) => {
        if (!err) {
            console.log('MongoDB connection done Successfully...');
        } else {
            console.log('Error in MongoDB connection: ' + JSON.stringify(err, undefined, 2));
        }
    });

// Export module
module.exports = mongoose;