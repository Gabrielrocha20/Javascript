const fs = require('fs').promises
const path = require('path')

const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

const pessoas = [
    {nome: 'João'},
    {nome: 'João2'},
    {nome: 'João3'},
    {nome: 'João4'},
    {nome: 'João5'},
]
const json = JSON.stringify(pessoas, '', 2)
fs.writeFile(caminhoArquivo, json, {flag: 'w', encoding: 'utf8'})

