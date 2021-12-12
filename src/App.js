import React from "react";
import './index.css'
//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NewsHome from "./components/NewsHome";
import SecondHome from "./components/SecondHome";
const App = () => {
  
  return (
    <>

     <Router>
     <NewsHome />
       <Switch>
<Route   exact path='/secondhome' component={SecondHome}/>
       </Switch>
     </Router>
    </>
  );
};

export default App;
