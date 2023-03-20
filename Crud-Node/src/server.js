const express = require('express'); //importando biblioteca

const app = express(); // passando o express para o app

app.use(express.json()); //usar json
app.listen(404, () => {console.log('running....')}) //iniciando servidor






