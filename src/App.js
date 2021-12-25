import React from 'react'
import Drop from './components/Drop';
import Marketplace from './components/Marketplace';
import Create from './components/Create';
import Login from './components/Login';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import Home from './components/Home';


function App()  {

  


  return (

    <Router>

  
    <Switch>

      <Route path="/Drop">
        <Drop/>
      </Route>

      <Route path="/Marketplace">
            <Marketplace />
      </Route>



      <Route path="/Create">
      <Create/>
      </Route>
            

        <Route path="/Login">
        <Login/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

       

    </Switch>
    </Router>

   


          



  )     

  
}

export default App
