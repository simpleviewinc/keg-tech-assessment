const { uuid } = require('@keg-hub/jsutils')

module.exports = {
  api: {
    /**I update origins to included localhost:3000 so we can access the port to connect goats at the endpoints */
    origins: ['http://localhost:3000'],
    port: 5005,
    host: '0.0.0.0',
    uuid: uuid(),
  },
  web: {
    port: 3000,
    host: '0.0.0.0',
  },
}
