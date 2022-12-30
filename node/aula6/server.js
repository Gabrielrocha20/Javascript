const express = require('express')
const app =  express()

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})
app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
    res.send('Contatos')
})
app.listen(3000)