const express = require('express')
const app = express()

const PORT = 3000 || process.env.PORT

app.listen(PORT, (req, resp) => {
  console.log('HOLA, ESTOY ESCUCHANDO DESDE EL PUERTO', PORT)
})

app.get('/', (req, resp) => {
  resp.status(200).send('Hiciste una peticion web.')
})

app.get('/canciones', (request, response) => {
  response.status(200).send('Acá hay una lista de canciones')
})

app.get('/canciones/:id', (request, response) => {
  
})