const { Client } = require('../models');


class ClientController {



  // -- index – Lista os registros da tabela com limite de busca e qtd total de dados resgistrados -- //
  async index(req, res) {
    try {
      const { page = 1 } = req.query;
      const clients = await Client.findAndCountAll({
      
        limit: 5,
        offset: (page - 1) * 5,
        order: [['id', 'ASC']],

      });


      return res.json(clients);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // --  show – Retorna os dados de um registro específico -- //
  async show(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);

      return res.json(client);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // --  store – Salva o novo item na tabela -- //
  async store(req, res) {

    // -- Aqui neste bloco criamos a validação do formulario de novas categorias --//
    let erros = []

    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
      erros.push({ texto: "Nome não preenchido" })
    }

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
      erros.push({ texto: "Email não preenchido" })
    }

    if (!req.body.birthday || typeof req.body.birthday == undefined || req.body.birthday == null) {
      erros.push({ texto: "Data de nascimento não preenchido" })
    }

    if (req.body.name.length < 2) {
      erros.push({ texto: "Nome inválido!" })
    }

    if (!req.body.email || req.body.email.indexOf("@") < 1 || req.body.email.indexOf('.') < 7) {
      erros.push({ texto: "Digite um email valido!" })
    }
    if (req.body.birthday.length < 8) {
      erros.push({ texto: "Data incompleta!" })
    }

    if (erros.length > 0) {

      res.json({ erros: erros })

    } else {
      try {
        const client = await Client.create(req.body);

        return res.json(client);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  // --  update – Atualiza um registro existente -- //
  async update(req, res) {

    // -- Aqui neste bloco criamos a validação do formulario de edição de clientes --//
    let erros = []

    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
      erros.push({ texto: "Nome não preenchido" })
    }

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
      erros.push({ texto: "Email não preenchido" })
    }

    if (!req.body.birthday || typeof req.body.birthday == undefined || req.body.birthday == null) {
      erros.push({ texto: "Data de nascimento não preechida!" })
    }

    if (req.body.name.length < 2) {
      erros.push({ texto: "Nome inválido!" })
    }

    if (!req.body.email || req.body.email.indexOf("@") < 1 || req.body.email.indexOf('.') < 7) {
      erros.push({ texto: "Digite um email valido!" })
    }
    if (req.body.birthday.length < 8) {
      erros.push({ texto: "Data de nascimento inválida!" })
    }

    if (erros.length > 0) {

      res.json({ erros: erros })

    } else {

      try {
        const client = await Client.findByPk(req.params.id);

        await client.update(req.body);

        return res.json({ client });
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  // --  destroy – Exclui um registro específico -- //
  async destroy(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);

      await client.destroy();

      return res.json("Cliente deletado com sucesso!");
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ClientController();