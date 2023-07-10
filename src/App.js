import { Routes, Route } from 'react-router-dom';
import './App.css'; 
import ForgotPwd from './Components/ForgotPwd';
import ResetPwd from './Components/ResetPwd';
import Sent from './Components/Sent';
import Authorize from './Components/Authorize';
import Login from './Components/Login';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
         <Routes>
           <Route path="/" element={ <ForgotPwd/>} ></Route>
           <Route path="/sent" element={<Sent/>}></Route>
           <Route path="/authorize/:id/:token" element={<Authorize/>}></Route>
           <Route path="/reset/:id" element={<ResetPwd/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<AddUser/>}></Route>
         </Routes>
    </div>
  );
}

export default App;
