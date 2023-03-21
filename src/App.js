import FarmexBody from './cores/FarmexBody';
import FarmexFooter from './cores/FarmexFooter';
import MissPassWord from './modules/Auth/MissPassWord';
import Login from './modules/Auth/Login';
import Register from './modules/Auth/Register';
import { Route,Routes } from 'react-router-dom';
import SpashPortal from './modules/Spash/SpashPortal';

function App() {
  return (
    <Routes>
      <Route key='/' path='/' element={<SpashPortal />}>
          <Route path="/" element={<>
          <FarmexBody/>
          <FarmexFooter/>
          </>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/misspassword' element={<MissPassWord/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
