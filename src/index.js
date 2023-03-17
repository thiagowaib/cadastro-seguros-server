const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push');

const {listarSeguros, salvarSeguro} = require('./services/seguro-service')

const vapidKeys = {
    publicKey: 'BISH8_i_g_ifQeqZpzZld8InEd0fFNPzXuj-aKKPDdkNfiFzIpJgJI53PxroF2wBKpbC3RCndBdc7oCHR3AlxNk',
    privateKey: 'fevnxjk3Hhex88hAQgMZ7D27tEpYDzrrvdHC02TUeYQ'
}
webpush.setVapidDetails(
    'mailto:teste@email.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const app = express()
app.use(bodyParser.json())
app.use(cors({origin: true, credentials: true}))

app.route('/api/seguros').get(listarSeguros)
app.route('/api/seguros').post(salvarSeguro)

const HOST = 'localhost'
const PORT = 9000

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`Servidor online em http://${HOST}:${PORT}/`)
})