const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const parse = (body)=> {
  let dom = new JSDOM(body);
  let document = dom.window.document;
  let response = {}
  // ... parse document and modify response ...
  return response 
}

module.exports = { parse };
