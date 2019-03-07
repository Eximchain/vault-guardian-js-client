process.env.DEBUG = 'node-vault'; // switch on debug mode

var options = {
  apiVersion: 'v1', // default
  endpoint: 'https://guardian-by-sully.eximchain-dev.com', // default
};
 
// get new instance of the client
var client = require("../../index")(options);

const okta_username = 'foo@eximchain.com';
const okta_password = 'bar!';
client.guardianLogin({ okta_username, okta_password })
.then((res) => client.token = res.data.client_token)
.then( () => {
  return client.guardianSign({raw_data:'26f0b296d44a09ef6135670c72fca7c6514a363512166d90a83df25a06f3dcb1'})
})
.then( (res) => client.token = res.data.fresh_client_token)
.then(() => console.log(client.token))
.catch(console.error);




