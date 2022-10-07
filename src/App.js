import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Dashboard from './pages/dashboard/Dashboard';
import UserAppointments from './pages/dashboard/UserAppointments';
import UsersHistory from './pages/dashboard/UsersHistory';
import UserReview from './pages/dashboard/UserReview';
import AllUsers from './pages/dashboard/AllUsers';
import RequireAdmin from './pages/login/RequireAdmin';
import AddDoctor from './pages/dashboard/AddDoctor';
import ManageDoctors from './pages/dashboard/ManageDoctors';
import Payment from './pages/dashboard/Payment';

function App() {


  <ToastContainer
    pauseOnHover={false}
  />

  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<AboutUs />}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard> </RequireAuth> }>
          <Route index element={<UserAppointments></UserAppointments>}></Route>
          <Route path='history' element={<UsersHistory></UsersHistory>}></Route>
          <Route path='review' element={<UserReview></UserReview>}></Route>
          <Route path='appointment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='adddoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='managedoctors' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
