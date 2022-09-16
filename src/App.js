import './App.css';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Appointment from './pages/Appointment';
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';

import Navbar from './components/shared/Navbar'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
