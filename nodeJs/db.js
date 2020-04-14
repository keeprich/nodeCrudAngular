const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CrudDatabase', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('MongoDb connection successfull.............', );
    }
    else console.log('Error in the Database connection:' + JSON.stringify(err, undefined, 2))
});

module.exports = mongoose;