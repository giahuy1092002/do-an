import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Establish from './Establish';
import EditForm from './EditForm';

function Manage() {
  return (
    <Routes>
        <Route index element={<Establish/>}/>
        <Route path=':id' element={<EditForm/>}/>
    </Routes>
  )
}

export default Manage;