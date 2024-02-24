import { useEffect, useState } from 'react'
import './App.css'

import Box from '@mui/material/Box';
import axios from 'axios';


function App() {
  

  const [server, setServer] = useState([]);
  const handleReq = async () =>{

    const data = (await axios.get('http://localhost:3000/hello')).data;

    console.log("data == ", data);

    setServer(data);
  }; 

  handleReq();

  return (
    
    <Box sx={{color : 'white'}}>
      <span> expressJS response == </span>  {JSON.stringify(server.message)}
    </Box>
  )
}

export default App
