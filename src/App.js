import 'bootstrap/dist/css/bootstrap.min.css'
import FarmexBody from './cores/FarmexBody';
import { Route, Routes } from 'react-router-dom';
import SpashPortal from './modules/Spash/SpashPortal';
import Establish from './modules/Establish/Establish';
import User from './modules/User/User'
import Statistics from './modules/Statistics';
import Login from './modules/Auth/Login';
import MissPassWord from './modules/Auth/MissPassWord';
import Register from './modules/Auth/Register';
import Contact from './modules/User/Contact';

function App() {
  const token = localStorage.getItem('token')
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='misspassword' element={<MissPassWord/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<SpashPortal />}>
          <Route path='/' element={<FarmexBody />} />
          <Route path='/establish' element={<Establish />} />
          <Route path='/user' element={<User />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/manage' element={<Establish />} />
          <Route path='/view_statistics/chart/*' element={<Statistics />} />
        </Route>
      </Routes>

    </div >

  );
}

export default App;
