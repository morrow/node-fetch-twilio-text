#!/usr/bin/env node

require('dotenv').config();

const { fetch } = require('./fetch');
const { parse } = require('./parse');
const { message } = require('./message');

fetch(process.env.FETCH_URL,
  (body)=>{
    message((parse(body)))
  }
)
