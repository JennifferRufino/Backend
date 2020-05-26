var express = require('express');
var router = express.Router();
var pessoas = [];

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express', pessoas: [] });
});
router.post('/cadastrar-pessoa', function(request, response, next) {

  hash = {
    nome: request.body.nome,
    sobrenome: request.body.sobrenome,
    cpf: request.body.cpf,
    telefone: request.body.telefone,
    endereco: request.body.endereco,
    
  }

  pessoas.push(hash);


  response.render('index', { title: 'cadastrar-pessoa', pessoas: pessoas });
  response.redirect('/cadastrar-pessoa');
})

module.exports = router;
