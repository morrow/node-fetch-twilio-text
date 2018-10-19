const https = require("https");
const fs = require('fs');
const config = require('dotenv').config().parsed;

const fetch = (callback)=>{
  https.get(config.FETCH_URL, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      fs.writeFile('./response.html', body);
      callback(body);
    });
  });
};

module.exports = { fetch };
