var app = require('./config/express');
require('./config/database')('localhost/agendaIgti')

var Contato = require('./app/models/contatoModel');

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Runing on port: ' + port);
});

app.get('/', function(req, res) {
    res.send('Bem vindos');
});

