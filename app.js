#!/usr/bin/env node

const { fetch } = require('./fetch');
const { parse } = require('./parse');
const { message } = require('./message');

setTimeout(()=>{
  fetch((body)=>{
    message(JSON.stringify(parse(body)))
  }), Math.random() * 60 * 1000);
