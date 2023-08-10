const express = require('express');
const router = express.Router();
const data = {};


// data.employees = require('../../data/employees.json');
// /handling routes in api 
// can use router to chain
router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    //  used to up date
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });
// get request with a parameter inside the url 
router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });



module.exports = router;