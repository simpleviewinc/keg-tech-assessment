const { uuid } = require('@keg-hub/jsutils')

module.exports = {
  api: {
    origins: ['http://localhost:3000','http://localhost'],         //Add path to origins so that we don't get CORS error on either app or jest test
    port: 5005,
    host: '0.0.0.0',
    uuid: uuid(),
  },
  web: {
    port: 3000,
    host: '0.0.0.0',
  },
}
