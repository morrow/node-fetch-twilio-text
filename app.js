#!/usr/bin/env node

require('dotenv').config();

const { fetch } = require('./lib/fetch');
const { parse } = require('./lib/parse');
const { message } = require('./lib/message');

fetch(process.env.FETCH_URL,
  (body)=>{
    message((parse(body)))
  }
)
