// import { useState } from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter"
import Stopwatch from "./components/Stopwatch"

function App() {
  

  return (
    <BrowserRouter>
    <Box sx={{width:"99vw", height:"96vh"}}>
        <Box>
          <AppBar position='relative'>
            <Toolbar>
            <Typography variant="h5" sx={{marginRight:"10px"}}>Menu</Typography>
            
            <Link to={"/stopwatch"} style={{paddingRight:7, color:"white"}}>Stopwatch</Link>
            <Link to={"/counter"} style={{color:"white"}}>Counter</Link>
            
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/stopwatch" element={<Stopwatch/>}></Route>
            <Route path="/counter" element={<Counter/>}></Route>
          </Routes>
        </Box>
     </Box>
    </BrowserRouter>
  )
}

export default App

// display:"flex", justifyContent:"center"