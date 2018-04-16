import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Modules

// Components
import Location from "./pages/Location";
import Welcome from "./pages/Welcome";
import Nav from "./components/Nav";

class App extends Component {
	state = {

	};

    render() {
        return (
            <div>
                <Router>
					<div>
						<Nav />
						<Switch /> 
							<Route exact path="/" component={Welcome} />
							<Route exact path="/location" component={Location} />
					</div>
				</Router>
				<footer className="footer">
					<div className="two-toned-footer-color"></div>
					<p className="text-muted text-muted-footer text-center">
						&copy; Copyright 2018 Elliott Wendel
					</p>
				</footer>
            </div>
        );
    }
}

export default App;
