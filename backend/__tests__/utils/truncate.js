const { sequelize } = require('../../src/app/models');

// -- Percorre todas as tabelas no banco sqlite e as deleta -- //
module.exports = ( )=> {
return Promise.all(Object.keys(sequelize.models).map(key => {
    return sequelize.models[key].destroy({ truncate: true, force: true });
}));
};