const app = require('./app');

app.listen(3333, function () {

app.set('port', process.env.PORT || 3333);

console.log("Servidor rodando na URL: http://localhost:3333");

});