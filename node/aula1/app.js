const path = require('path')
const axios = require('axios')
const {Pessoa} = require('./mod1')

axios('https://blaze.com/api/roulette_games/recent')
    .then(response=> console.log(response.data))
    .catch(e => console.log('error'))
