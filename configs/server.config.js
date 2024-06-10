const { uuid } = require('@keg-hub/jsutils')

module.exports = {
  api: {
    /**I update origins to able to access from http://localhost:3000, also '*' works with any other origins but not good practice */
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
