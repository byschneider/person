const router = require('express').Router();
const db = require('../server/database');
const Person = require('../models/person');

function create(req, res) {
    let person = new Person();
    person.curriculum.name = req.body.name;
    person.curriculum.birthday = req.body.birthday;
    person.curriculum.phone = req.body.phone;
    person.curriculum.email = req.body.email;

    person.save(function save(err) {
        if (err) res.send(err);

        res.json({
            time: new Date().toISOString(),
            person
        });
    });
}

function retrieveAll(req, res) {
    Person.find(function find(err, persons) {
        if (err) res.send(err);

        res.json(persons);
    });
}

function retrieveById(req, res) {
    Person.findById(req.params.id, function findById(err, person) {
        if (err) res.send(err);

        res.json(person);
    });
}

function update(req, res) {
    Person.findById(req.params.id, function findById(err, person) {
        if (err) res.send(err);

        person.curriculum.name = req.body.name;
        person.curriculum.birthday = req.body.birthday;
        person.curriculum.phone = req.body.phone;
        person.curriculum.email = req.body.email;

        person.save(function save(err) {
            if (err) res.send(err);

            res.json({
                time: new Date(),
                person
            });
        });
    });
}

function remove(req, res) {
    Person.remove({
        _id: req.params.id
    }, function remove(err, person) {
        if (err) res.send(err);

        res.json({ person });
    });
}

router.route('/')
    .get(retrieveAll)
    .post(create);

router.route('/:id')
    .get(retrieveById)
    .patch(update)
    .delete(remove);

module.exports = router;