process.env.DEBUG = 'node-vault'; // switch on debug mode

var options = {
  apiVersion: 'v1', // default
  endpoint: 'https://guardian-by-sully.eximchain-dev.com', // default
};
 
// get new instance of the client
var client = require("../../index")(options);

const okta_username = 'foo@eximchain.com';
const okta_password = 'bar';
client.guardianLogin({ okta_username, okta_password })
.then(console.log)
.catch(console.error);



