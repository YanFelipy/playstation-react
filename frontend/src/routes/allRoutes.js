import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Homepage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const AllRoutes = () => {
    return (
      <>
  <Router>
      <Routes>

       <Route path="/" element={<Login /> } exact />
           
  
           <Route path="/home" element={<Home /> } exact />
           
           
                </Routes>


  </Router>
     </>
    );
  }
  
  export default AllRoutes;