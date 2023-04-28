import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import MissPassWord from './MissPassWord';

function Auth() {
  return (
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='misspassword' element={<MissPassWord/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
  )
}

export default Auth;