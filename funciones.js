const fs = require('fs')
const canciones = require('./canciones.json')

canciones.canciones.push({
    id: 2,
    name: 'Who Can It Be Now',
    autor: 'Men at Work'
})

fs.writeFile('./canciones.json', JSON.stringify(canciones), 'utf-8', (error) => {
    console.log(error)
})
