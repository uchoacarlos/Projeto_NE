const { Router } = require('express');
const ClientController = require('./app/controllers/ClientController');
const { Client } = require('./app/models');

const routes = Router();



// -- Rotas --//

routes.get('/', (req, res) => {
    res.send('<h1>Hello! Welcome to my CLIENT_API NodeJS-MYSQL<h1>');

});

// -- Rotas Clientes --//
routes.get('/client/list', ClientController.index);

routes.get('/client/detail/:id', ClientController.show);

routes.post('/client/create', ClientController.store);

routes.put('/client/update/:id', ClientController.update);

routes.delete('/client/delete/:id', ClientController.destroy);

module.exports = routes;