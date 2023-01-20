import React,{Component} from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import ShowUsers from "./Component/ShowUsers";
import Users from "./Component/Users";
import Login from "./Component/Login";
import "./App.css";
import {route} from "./Router";
import Edituser from "./Component/Edituser";

export default class App extends Component{

	constructor(props){
		super(props);
		this.id=window.localStorage.getItem('hash').split('/')[1];
		this.views={
		
				home:<Home/>,
				showuser:<ShowUsers/>,
				createuser:<Users/>,
				login:<Login/>,
				["edituser/"+this.id]:<Edituser userId={this.id}/>
			
		}
	}

	componentDidMount(){
        console.log("This method is Running from App.jsx")
	}
	renderviews = ()=>{
		console.log(route);
		return this.views[route];
	}
	
    render()
	{
		return(
		 <React.Fragment>
			<Header/>
			{this.renderviews()}
		 </React.Fragment>
		);
	
		}	
		
}


