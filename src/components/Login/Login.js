import { useHistory } from "react-router-dom";
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';





let Login=()=> {

    let history= useHistory()
    
    return (
       

    //     <form>
    //     <div class="form-group">
    //       <label for="exampleInputEmail1">Email address</label>
    //       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleInputPassword1">Password</label>
    //       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    //     </div>
    //     <div class="form-group form-check">
    //       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    //       <label class="form-check-label" for="exampleCheck1">Check to Agree*</label>
    //     </div>
    //     <button type="submit" class="btn btn-primary">Submit</button>
    //   </form>


    <>

    <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button class="btn btn-primary">Login</button>
            <br />
            <br />
            <button onClick={()=>{
                history.push("/Signup")
            }} class="btn btn-primary">Sign Up</button>
            <br>
            
            </br>
          </form>
        </div>
      </div>
    </>
  );
};


export default Login
