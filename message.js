require('dotenv').config();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
); 

const messageSent = (message)=>{
  let attributes = ['body', 'errorCode', 'errorMessage', 'sid', 'status', 'from', 'to'];
  console.log('============= message sent ============');
  attributes.map(a=>console.log(a, '=>', message[a]));
  console.log('=======================================');
}
 
const message = (content)=>{
  client.messages.create({  
    from: process.env.TWILIO_PHONE_FROM,       
    to:   process.env.TWILIO_PHONE_TO,
    body: content,
  }).then(message => messageSent(message)).done();
}

module.exports = { message };
