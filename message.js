const config = require('dotenv').config().parsed;
const client = require('twilio')(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
); 
 
const message = (content)=>{
  client.messages.create({  
    from: config.TWILIO_PHONE_FROM,       
    to: config.TWILIO_PHONE_TO,
    body: content,
  }).then(message => console.log(message.sid)).done();
}

module.exports = { message };
