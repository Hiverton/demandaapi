const restful = require('node-restful')
const mongoose = restful.mongoose

const demandaSchema = new mongoose.Schema({
    codDemanda: {type: Number, require: true},
    ciclo: {type: Number, require: true},
	codPessoaDetalhe: {type: Number, require: true},
	codStatus: {type: Number, require: true},
	codTpoNegocio: {type: Number, require: true},
	codGrupoEscola: {type: Number, require: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Demanda', demandaSchema)