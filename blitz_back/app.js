const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.json());

app.use(express.urlencoded({extended : true}));

app.get('/cars', (req, res) => {

    // these headers make sure cros bowser policy should be default 
    // when client request and return http-origin 1.1, 
    // so that no crfs attacked will happen when request generated... 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');  


    // here response should be in json
    res.send({"message" : {"cartype" : "Ferrai", "owner" : "Mudassiq", "date" : "02-02-2024", "model" : "sf90-stradale", "id" : "65d323cd6227a803e824d63e"}});    
})


app.get('/buy', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');  

  console.log("request :", req);

  res.send({"massage" : req.params});

    
})


app.post('/buy', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');  

    console.log("response body", res);
    console.log("body", req.body);
    
    res.send({"message" : req.body});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})