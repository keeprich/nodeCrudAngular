const express = require('express');
const router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId();
const { ObjectId } = require('mongodb');

const { Employee } = require('../models/employee');


// access site on localhost:3000/employees
router.get('/', (req, res) => {
    console.log('GET all working')
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }else {
            console.log('Error in Retriving Employees :', + JSON.stringify(err, undefined, 2));
        }
    });
});

// GETTING A SINGLE EMPLOYEE
router.get('/:id', (req, res) => {
if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        }else {
            console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2))
        }
    })
})

router.post('/', (req, res)=> {
    const emp = new Employee({
        name: req.body.name,
        position : req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save(( err, docs ) =>{
        if( !err ) {
            res.send(docs);
        } else{
            console.log('Erroe in Employee save :' + JSON.stringify(err, undefined, 2 ));
        }
    })

})

// UPDATION EMPLOYEE DETILES
router.put('/:id', (req, res)=> {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with given id : ${req.params.id}`);

    emp = {
        name: req.body.name,
        position : req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, docs) => {
if( !err  ){
    res.send(docs)
}else {
    console.log('Error in Employee Update: ' + JSON.stringify(err, undefined, 2));
}
    });

})


// DELETING EMPLOYEE DATA
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, docs) => {
if (!err) {
    res.send(docs);
}else {
    console.log('Error in Employee Delete: ' + JSON.stringify(err, undefined, 2));

}
    })
})

module.exports = router;