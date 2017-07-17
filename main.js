'use strict'

console.log('bot started without problems')

const Twit   = require('twit');
const config = require('./configs/config');

const T = new Twit(config);
