import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Modules

// Components
import Nav from "./components/Nav";

//Pages
// import Account from "./page/Account";
import Landing from "./pages/Landing";
import Location from "./pages/Location";
import LogIn from "./pages/LogIn"; 
import SignUp from "./pages/SignUp";

class App extends Component {
	state = {

	};

	style = {
		minHeight: "100%"
	};

    render() {
        return (
            <div className="">
                <Router>
					<div>
						<Nav />
						<Switch /> 
							<Route exact path="/" component={Landing} />
							<Route exact path="/location" component={Location} />
							<Route exact path="/login" component={LogIn} />
							<Route exact path="/signup" component={SignUp} />
					</div>
				</Router>
				<footer className="">
					<p className="text-muted text-center">
						&copy; Copyright 2018 Elliott Wendel
					</p>
				</footer>
            </div>
        );
    }
}

export default App;
