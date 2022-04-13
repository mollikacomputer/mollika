import './App.css';
import { Route, Routes } from 'react-router-dom';
import Services from './Components/Pages/Services/Services';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import LogIn from './Components/Pages/LogIn/LogIn';
import Registration from './Components/Pages/Registration/Registration';
import NotFound from './Components/Pages/NotFound/NotFound';
import Header from './Components/CommonPage/Header/Header';
import Footer from './Components/CommonPage/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './Components/Pages/ServiceDetail/ServiceDetail';
import Experts from './Components/CommonPage/Experts/Experts';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Services></Services>} ></Route>
        <Route path='/services' element={<Services></Services>} ></Route>
        <Route path='/services#experts' element={<Experts></Experts>} ></Route>
/* service component ডায়নামিক করতে হলে service component এর বাটন 
হ্যান্ডেল ক্লিক করার পরে পরবর্তী ServiceDetails component রিডাইরেক করে দেওয়ার লিঙ্ক */
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>} > </Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>} ></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>} ></Route>
        <Route path='/login' element={ <LogIn></LogIn> } ></Route>
        <Route path='/registration' element={<Registration></Registration>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
