import Login from './Pages/Login/Login';
import Home from './Pages/Home/Homepage';
import SignUp from './Pages/SignUp/CreateUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Routes = () => {
    return (
  <BrowserRouter>
      <Switch>
       <Route path="/" exact>
           <Login /> 
     </Route>
     <Route path="/home">
           <Home /> 
     </Route>
     <Route path="/signup">
           <SignUp /> 
     </Route>
   </Switch>


  </BrowserRouter>
    );
  }
  
  export default Routes;