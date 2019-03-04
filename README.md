# vault-guardian-js-client

A client for the HTTP API of Eximchain's [Guardian] written for


## install
make sure to use node.js version >= 6

    npm install vault-guardian-js-client

## usage

### init 
```javascript
var options = {
  apiVersion: 'v1', // default
  endpoint: 'http://127.0.0.1:8200', // default
  token: '1234' // optional client token; can be fetched after valid initialization of the server
};

// get new instance of the client
var client = require("vault-guardian-js-client")(options);
```

### Authenticate and sign with your secp256-k1 key

```javascript

const username = 'me';
const password = 'foo';
client.guardianLogin({ username, password }))
.then( (token) => client.token = token )
.then( () => return client.guardianSign('0x7FFFFFFF'))
.then( (signature) => console.log(signature))
.catch(console.error);
```

## docs
Just generate [docco] docs via `npm run docs`.

## check this out to init a vault environment

 https://github.com/kr1sp1n/node-vault/tree/master/example
 
 https://github.com/kr1sp1n/node-vault/tree/master/docker-compose.yml
