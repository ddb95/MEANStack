const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB connection Successfull');
    } else {
        console.log('Error in MongoDB connection: ' + JSON.stringify(err, undefined, 2));
    }
});

// Export Module
module.exports = mongoose;