import React from 'react'
import Drop from './components/Drop';
import Marketplace from './components/Marketplace';
import Create from './components/Create';
import Login from './components/Login/Login';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Signup from './components/Login/Signup';
import Home from './components/Home';
import {Container} from 'react-bootstrap'
import {AuthProvider} from './components/Firebase/context/AuthContext'

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
            

        <Route path="/Login/Login">
        <Login/>
        </Route>


        <Route path="/Login/Signup">
          <AuthProvider>
            <Container className='d-flex  align-items-center justify-content-center' style={{minHeight:'100vh'}}>
         <div className='w-100' style={{maxwidth:'400px'}}>  
           <Signup/>
            </div>
        
        </Container>
        </AuthProvider>
        
        
        </Route>

        <Route exact path='/'>
          <Home/>
        </Route>

       

    </Switch>
    </Router>

   


          



  )     

  
}

export default App
