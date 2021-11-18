import Login from './Pages/Login/Login';
import Home from './Pages/Home/Homepage';
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
    
   </Switch>


  </BrowserRouter>
    );
  }
  
  export default Routes;