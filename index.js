import express from 'express'
import atendimento from './router/atendimento.js'

const app = express()

app.use(express.json())

app.use('/api/v1/atendimento' , atendimento)

app.listen(3000 , () => {
    console.log('Servidor rodando na porta 3000')
})

