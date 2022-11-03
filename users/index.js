const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname, '../template');

router.get('/add', function(req, res){

    res.sendFile( `${basePath}/formulario.html`);

});

router.post('/save', function(req, res){

    console.log(req.body);

    const name = req.body.nome
    const idade = req.body.idade
    const senha = req.body.senha

    console.log(name);
    console.log(idade);
    console.log(senha);   

    console.log(`O nome é: ${name}, a idade é: ${idade}  e a senha é: ${senha}`);

});

router.get('/', function(req, res){

     res.sendFile( `${basePath}/users.html`);
 
 });

 module.exports = router;