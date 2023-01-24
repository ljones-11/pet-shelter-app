import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './containers/Homepage';
import DogContainer from './containers/DogContainer';
import CatContainer from './containers/CatContainer';
import AdminContainer from './containers/AdminContainer';
import {useState} from 'react'
import LogIn from './components/LogIn';


function App() {
  const [isAdmin, setIsAdmin ] = useState(false)


  return (
    <>
   
      <Router>    
         <NavBar />
        <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/dogs' element={<DogContainer />} />
                <Route path='/cats' element={<CatContainer />} />
                <Route path='/admin' element={<AdminContainer isLoggedIn = {isAdmin} />} />
                <Route path='/login' element={<LogIn setIsAdmin={setIsAdmin} />}/>
            </Routes>
      <Footer/>
            
        </Router> 
    
      
    </>
  );
}

export default App;
