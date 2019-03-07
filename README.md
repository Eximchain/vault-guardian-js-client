# vault-guardian-js-client

A client for the HTTP API of Eximchain's [Guardian] written for


## install
make sure to use node.js version >= 6

    npm i @eximchain/guardian-client

## usage

### init 
```javascript

process.env.DEBUG = 'node-vault'; // switch on debug mode

var options = {
  apiVersion: 'v1', // default
  endpoint: 'http://guardian-test-2.eximchain-dev.com', // default
};
 
// get new instance of the client
var client = require("@eximchain/guardian-client")(options);

```

### Authenticate and sign with your secp256-k1 key

```javascript


const okta_username = 'foo@bar.com';
const okta_password = 'foobar!';
client.guardianLogin({ okta_username, okta_password })
.then((res) => client.token = res.data.client_token)
.then( () => {
  return client.guardianSign({raw_data:'26f0b296d44a09ef6135670c72fca7c6514a363512166d90a83df25a06f3dcb1'})
})
.then( (res) => client.token = res.data.fresh_client_token)
.then(() => console.log(client.token))
.catch(console.error);
```

## docs
Just generate [docco] docs via `npm run docs`.

## check this out to init a vault environment

 https://github.com/kr1sp1n/node-vault/tree/master/example
 
 https://github.com/kr1sp1n/node-vault/tree/master/docker-compose.yml
