exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Nome2: <input type="text" name="nome2">
    <button>Enviar1</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST')
}