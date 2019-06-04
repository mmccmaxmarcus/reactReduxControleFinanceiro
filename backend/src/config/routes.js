const express = require('express')

module.exports = function(server) {
    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
    
    //Rotas de Ciclo de Pagamento, onde vou colocar no nodemon /billingCycles
    const billingCycle = require('../api/billingCycle/billingCycleService.js')
    billingCycle.register(router,'/billingCycles')

}