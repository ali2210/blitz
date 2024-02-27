import { useState } from 'react'
import './App.css'

import Box from '@mui/material/Box';
import axios from 'axios';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AtmIcon from '@mui/icons-material/Atm';
import { Button } from '@mui/material';


function App() {
  

  const [server, setServer] = useState([]);
  const handleReq = async () =>{

    const data = (await axios.get('http://localhost:3000/cars')).data;

    console.log("data == ", data);

    setServer(data);
  }; 


  const handleNew = async (event) => {

      const cartype = event.target.elements.cartype.value;
      const owner = event.target.elements.owner.value;
      const date = event.target.elements.date.value;
      const model = event.target.elements.model.value;

      console.log("data == ", cartype, owner, date, model);

      const data = await fetch('http://localhost:3000/buy', {
        method : 'POST',
        body : JSON.stringify({
            cartype : cartype,
            owner : owner,
            model : model,
            date : date,
            id : "65d323cd6227a803e924d63a"
        })
      });
      
      const resp = await data.json();
      console.log("response {:?}", resp);

      event.preventDefault();

  }

  return (
    <Box>
        <Button variant='normal' onClick={handleReq}>
          <DirectionsCarIcon sx={{color : 'black'}}></DirectionsCarIcon>
        </Button>
        <Box sx={{position : 'relative', top : '1pc', left : '0pc', color : 'black'}}>
          cartype : {JSON.stringify(server.message)},
        </Box>
        {/* <Box sx={{position : 'relative', top : '1.5pc', left : '0pc'}}>
          owner : {JSON.stringify(server.message.owner)},
        </Box>
        <Box sx={{position : 'relative', top : '2pc', left : '0pc'}}>
          buy date : {JSON.stringify(server.message.date)},
        </Box>
        <Box sx={{position : 'relative', top : '2.5pc', left : '0pc'}}>
          car model : {JSON.stringify(server.message.model)},
        </Box>
        <Box sx={{position : 'relative', top : '3pc', left : '0pc'}}>
          car issue id : {JSON.stringify(server.message.id)},
        </Box> */}

        <Box sx={{position : 'relative', top : '5pc'}}>
          <form onSubmit={handleNew}>
              <input type='text' id="cartype" variant="filled" name="cartype" placeholder='enter your car type [ferrai, tesla]'></input>
              <input type='text' id="owner" variant="filled" name="owner" placeholder='enter your name'></input>
              <input type='date' id="date" variant="filled" name='date'></input>
              <input type='model' id="model" variant="filled" name='model'></input>
              <Button variant='outlined' type='submit'>
                    <AtmIcon></AtmIcon>
              </Button>
          </form>
        </Box>
    </Box>  
  )
}

export default App
