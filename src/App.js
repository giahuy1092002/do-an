import 'bootstrap/dist/css/bootstrap.min.css'
import FarmexBody from './cores/FarmexBody';
import FarmexFooter from './cores/FarmexFooter';
import MissPassWord from './modules/Auth/MissPassWord';
import Login from './modules/Auth/Login';
import Register from './modules/Auth/Register';
import { Route, Routes } from 'react-router-dom';
import SpashPortal from './modules/Spash/SpashPortal';
import Establish from './modules/Establish/Establish';
import AddEquip from './modules/Establish/AddEquip';
import User from './modules/User/User'
import Setup from './modules/User/Setup'

function App() {
  return (
    <Routes>
      <Route key='/' path='/' element={<SpashPortal />}>
        <Route path="/" element={
          <>
            <FarmexBody />
            <FarmexFooter />
          </>
        }
        >
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/misspassword' element={<MissPassWord />}></Route>
        <Route path='/establish' element={<Establish />}></Route>
        <Route path='/establish/add' element={<AddEquip />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/setup' element={<Setup />}></Route>
        </Route>
    </Routes >
  );
}

export default App;
