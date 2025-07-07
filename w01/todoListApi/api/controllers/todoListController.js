'use strict';

var mongoose = require('mongoose'), Task = mongoose.model('Task');

exports.list_all_tasks = async function (req, res) {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create_a_task = async function (req, res) {
    try {
        const new_task = new Task(req.body);
        const task = await new_task.save();
        res.json(task);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.read_a_task = async function (req, res) {
    console.log('we reached here');
    try {
        console.log(req);
        const task = await Task.findById(req.params._id);
        res.json(task);
    } catch (err) {
        console.log(res.status(500) + err);
        res.status(500).send(err);
    }
};

exports.update_a_task = async function (req, res) {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.query.taskId },
            req.body,
            { new: true }
        );
        res.json(task);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete_a_task = async function (req, res) {
    try {
        await Task.deleteOne({ _id: req.query.taskId });
        res.json({ message: 'Task successfully deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};