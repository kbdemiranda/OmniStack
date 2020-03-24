const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.json({
        event: 'Semana Ommitstack 11.0',
        aluno: 'Kaique de Miranda'
    });
});

app.listen(3333);