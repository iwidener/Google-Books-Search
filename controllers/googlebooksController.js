const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Googlebook 
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Googlebook
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Googlebook
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        console.log(req.body);
        req.body.authors = req.body.authors[0]
        db.Googlebook
        .create(req.body)
        .then(dbModel => res.json(dbModel)
        .cath(err => res.status(422).json(err)));
    },

    remove: function(req,res) {
        db.Googlebook
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};