/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './Global/Store/Hooks';
import { Routes, Route } from 'react-router-dom';
/*IMPORT COMPONENTS*/
import WhatsApp from 'Components/Isolated/WhatsApp/WhatsApp';
import Navbar from 'Scenes/Navbar/Navbar';
import Home from 'Scenes/Home/Home';
/*IMPORT CSS*/
import { Box } from '@mui/material';

const App = () => {
   return (
      <Box>
         <Navbar />

         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>

         <WhatsApp />
      </Box>
   );
};

export default App;
