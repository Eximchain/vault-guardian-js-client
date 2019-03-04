process.env.DEBUG = 'node-vault'; // switch on debug mode

var options = {
  apiVersion: 'v1', // default
  endpoint: 'http://guardian-test-2.eximchain-dev.com', // default
};
 
// get new instance of the client
var client = require("@eximchain/guardian-client")(options);

const username = 'me';
const password = 'foo';
client.guardianLogin({ username, password })
.then(console.log)
.catch(console.error);



