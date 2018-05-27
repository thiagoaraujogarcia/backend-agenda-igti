var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Contato');

api.lista = function(req, res) {

    model.find().then(function(contatos) {
        res.json(contatos);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
}

api.buscaPorId = function(req, res) {

    model.findById(req.params.id).then(function(contato) {
        if(!contato) throw new Error ('Contato não encontrado');
        res.json(contato);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
}

api.removePorId = function(req, res) {

    model.remove({'_id': req.params.id}).then(function() {
        res.sendStatus(200);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
}

api.adiciona = function(req, res) {

    model.create(req.body).then(function(contato) {
        res.json(contato);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
}

api.atualiza = function(req, res) {
    
    model.findByIdAndUpdate(req.params.id, req.body).then(function(contato) {
        res.json(contato);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
}

module.exports = api;