const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {

    // these headers make sure cros bowser policy should be default 
    // when client request and return http-origin 1.1, 
    // so that no crfs attacked will happen when request generated... 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');  


    // here response should be in json
    res.send({"message" : "hello"});    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})