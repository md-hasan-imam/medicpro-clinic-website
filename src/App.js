import './App.css';

import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Appointment from './pages/appointment/Appointment';
import Reviews from './pages/reviews/Reviews';
import ContactUs from './pages/contact/ContactUs';
import Login from './pages/login/Login';

import Navbar from './pages/shared/Navbar'
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/login/SignUp';
import RequireAuth from './pages/login/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
