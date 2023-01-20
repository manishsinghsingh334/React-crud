import React,{Component} from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

export default class Header extends Component{
    render=()=>{
        return(
            <div>
          <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#createuser">Users</a>
        <a className="nav-link" href="#showuser">ShowUser</a>
        <a className="nav-link" href="#login">Login</a>
        <a className="nav-link" href="#edit">Edit</a>
        <a className="nav-link" href="#delete">Delete</a>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
            </div>
        )
    }
		

}