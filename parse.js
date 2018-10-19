const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const parse = (body)=> {
  let dom = new JSDOM(body);
  let document = dom.window.document;
  // ... parse document and craft message ...
  let message = `Hello from '${document.title}'`;
  return message;
}

module.exports = { parse };
