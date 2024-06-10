const { uuid } = require('@keg-hub/jsutils')

module.exports = {
  api: {
    /**I update origins to able to access from localhost:3000, or we can use '*' for any other port but not good practice */
    origins: ['localhost:3000'],
    port: 5005,
    host: '0.0.0.0',
    uuid: uuid(),
  },
  web: {
    port: 3000,
    host: '0.0.0.0',
  },
}
