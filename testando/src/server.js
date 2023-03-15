const express = require('express');



const app = express();


app.use(express.json());


let users = [];

app.get('/user/list', (req, res) => {

    return res.status(200).send(users);
})

app.post('/user/create', (req, res) => {

    let { id, nome, idade, sexo } = req.body;

    let addUser = {
        id: id,
        nome: nome,
        idade: idade,
        sexo: sexo
    }

    users.push(addUser);

    return res.status(200).send({ message: 'Usuário criado com sucesso!', dados: addUser });
})

app.patch('/user/:idUser', (req, res) => {

    let { nome, idade, sexo } = req.body;
    let { idUser } = req.params;

    let objectUser = users.find((data) => data.id == idUser);

    console.log(objectUser);
    
    let updateUser = {
        nome: nome,
        idade: idade,
        sexo: sexo
    }

    users.push(updateUser);

    return res.status(200).send({ message: 'Usuário criado com sucesso!', dados: updateUser });
})


app.listen(3000, () => {
    console.clear();
    console.log('Servidor iniciado 3000');
})