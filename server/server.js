#!/usr/bin/env node

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiEndpoints = require('./endpoints')
const { api: config } = require('../configs/server.config')
const { noOpObj, noPropArr, eitherArr } = require('@keg-hub/jsutils')

const rootPath = path.join(path.normalize(__dirname), '..')

/**
 * Configures cors for the backend API
 * Defines the origins that are allow to connect to the API
 * @param {Object} app - Express app object
 * @param {Object} config - server config object
 *
 * @returns {void}
 */
const setupCors = (app, config = noOpObj) => {
  console.log("PreCORs");
  if (!app) return

  const origins = config.origins || noPropArr
  const allowedOrigins = eitherArr(origins, [origins])

  app.use((req, res, next) => {
    const origin = req.headers.origin
    const foundOrigin = allowedOrigins.includes(origin)
      ? origin
      : allowedOrigins[0]

    // the foundOrigin was comming up undefined, hared coded the url to continue for now, will look into fixing it later
    res.header('Access-Control-Allow-Origin', "http://localhost:3000")
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )

    next()
  })
}

/**
 * Configures the API and sets static paths based on the config object
 * @param {Object} app - Express app object
 * @param {Object} config - server config object
 *
 * @returns {void}
 */
const setupServer = (app, config) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static(rootPath))
}

/**
 * Starts a express API server
 * Loads the server config for configuring the server properties
 *
 * @returns {Object} - Express app and server
 */
const initApi = async () => {
  const app = express()

  setupServer(app, config)
  setupCors(app, config)
  apiEndpoints(app, config)

  const server = app.listen(config.port, config.host, () =>
    console.log(new Date() + ` - Listening on ${config.host}:${config.port}`)
  )

  return { app, server }
}

module.exports = {
  initApi,
}
