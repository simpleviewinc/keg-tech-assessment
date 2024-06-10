const { uuid } = require('@keg-hub/jsutils')

module.exports = {
  api: {
    /**I update origins to use ['*'] to able to access from localhost:3000, or other port (not secure way) */
    origins: ['*'],
    port: 5005,
    host: '0.0.0.0',
    uuid: uuid(),
  },
  web: {
    port: 3000,
    host: '0.0.0.0',
  },
}
