'use strict';

const mongodb = require("../db/connect");

// const getData = async (req, res) => {
//     const result = await mongodb.getDb().db().collection('professional').find();
//     result.toArray().then((lists) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(lists(0));
//     });
// };

// var mongoose = require('mongoose'), Task = mongoose.model('Profession');

const getData = async (req, res) => {
    try {
        const result = await mongodb.getDb().collection('professional').find().toArray();
        // console.log(result);
        res.setHeader('Content-type', 'application/json');
        res.status(200);
        res.json(result[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
}

// const details = require('../db/details.json');

const professional = async (req, res) => {
    console.log("Hitting here");
    getData(req, res);

}
module.exports = { professional };