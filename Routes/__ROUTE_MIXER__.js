const MainRoute = require('./MainRoute')

module.exports = (app) => {
    app.use('/', MainRoute)
}