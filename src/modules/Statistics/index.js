import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Temp from './Temp';
import Air from './Air';
import Light from './Light';
import Chart from './Chart';
import Land from './Land';

function Statistics() {
  return (
    <Routes>
      <Route path='/' element={<Chart/>}>
          <Route path='temp' element={<Temp/>}/>
          <Route path='air' element={<Air/>}/>
          <Route path='light' element={<Light/>}/>
          <Route path='land' element={<Land/>}/>
      </Route>
    </Routes>
  )
}

export default Statistics;