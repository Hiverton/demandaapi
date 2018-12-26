const express = require('express')

module.exports = function(server) {
    //API Routes
    const router = express.Router();
    server.use('/api', router)

    //Demanda Routes
    const demandaService = require('../api/demanda/demandaService')
    demandaService.register(router, '/demandas')
}