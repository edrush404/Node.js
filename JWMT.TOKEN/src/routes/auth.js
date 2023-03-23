const express = require('express'); //Importa o EXPRESS para o codigo 
const router = express.Router(); //Cria uma chamada para a ferramenta de Rotas do express
const jwt = require('jsonwebtoken'); //Importa o JWT para o codigo
const bcrypt = require('bcrypt'); //Importa a ferramenta de criptografia BCRYPT para o codigo
const config = require('.../config'); //Importa o arquivo de configuração do JWT

const user = {
    id: 1,
    name: "Mario Lucas",
    email: "mariolucas@gmail.com",
    password: '' //123456
}

router.post('/login', (req, res) => {
    const {email, password} = req.body;

    console.log(email);

    const senhaHash ='';

    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(password, salt, function(err, hash){
            console.log('hash');
            console.log(hash);
                return senhaHash = hash;

        })
    })
    console.log('ACESSOU A ROTA DE LOGIN COM SUCESSO')
});

module.exports = router;
    



