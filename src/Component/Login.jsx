import React,{Component} from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css"; 
import"./login.css";

export default class Login extends Component{
    render=()=>{
        return(
            <div>
          <div className="row">
<div className="col-sm-5 a bg-light mx-auto">
<div className="row">
<div className="col-sm-12 b bg-light">
<h1 className="text-center mt-3"> Welcome to Techpile</h1>
<h3 className="text-center mt-3">Login to Your Training</h3>
</div>
</div>
<div className="row">
<div className="col-sm-12 c bg-light">
<form method="post" onsubmit="return register(event);">
       
       <p>RollNo : <input type="text" name="roll" id="roll"   value="1001" readonly/></p>

       <p>Name : <input type="text" name="name" id="name"/></p>
       <p>Email : <input type="email" name="email" id="email"/></p>
       <p>Password : <input type="password" name="password" id="password"/></p>
       <p>Mobile : <input type="text" name="mobile" id="mobile"/></p>
       <p><input type="submit" name="submit" id="submit"/></p>
   </form>
</div>
</div>
<div className="row">
<div className="col-sm-12 d bg-light">
<p className="text-center mt-4">Don't have an account? <b className="text-warning">Sign Up</b></p>
</div>
</div>
</div>
</div>
            </div>
        )
    }
		

}