const http = require('http');
const https = require('https');
const fs = require('fs');

const fetch = (url, callback)=>{
  // use http or https depending on url  
  let adapter = [http, https][url.indexOf('https://') >=0 ? 1 : 0];
  // performr request
  adapter.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      callback(body);
    });
  });
};

module.exports = { fetch };
