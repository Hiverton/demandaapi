const Demanda = require('./demanda')
Demanda.methods(['get', 'post', 'put', 'delete'])
Demanda.updateOptions({new: true, runValidators: true})

module.exports = Demanda