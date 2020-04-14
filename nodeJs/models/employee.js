const mongoose = require('mongoose');

// CREATING EMPLOYEES MODEL

const Employee = mongoose.model('Employee', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});

module.exports = { Employee }


