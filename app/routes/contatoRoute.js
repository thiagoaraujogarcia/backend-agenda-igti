module.exports = function(app) {

    var api = app.api.contato;

    app.route('/api/contatos')
        .get(api.lista)
        .post(api.adiciona);
    
    app.route('/api/contatos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
}