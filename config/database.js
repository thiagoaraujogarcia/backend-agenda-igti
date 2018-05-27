module.exports = function(uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    //mongoose.connect.on('connected', function() {
    //    console.log('Conectado ao MongoDB');
    //});

    //mongoose.connect.on('error', function(error) {
    //    console.log('Erro na conexão' + error);
    //});

    //mongoose.connect.on('disconnected', function() {
    //    console.log('Desconectado do MongoDB');
    //});

    //process.on('SIGNIT', function() {
    //    mongoose.connect.close(function() {
    //        console.log('Conexão encerrada, conexão fechada');
    //    });
    //});
}