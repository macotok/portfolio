'use strict';
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const FIRE_BASE = require('../.env.js');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIRE_BASE
});
