import './index.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NavigationBar from './Components/NavigationBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Service from './Pages/Service';
import Professional from './Pages/Professional';
import Contact from './Pages/Contact';
import CheckoutPage from './Pages/CheckoutPages';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import ProfessionalCheckout from './Pages/ProfessionalCheckout';

function App() {
  return (
    <div>
      <Router>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
         <Route path="/checkout" element={<CheckoutPage/>}/>
         <Route path="/procheckout" element={<ProfessionalCheckout/>}/>
        <Route path='/professional' element={<Professional/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
