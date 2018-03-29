import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Modules

// Components
import Home from "./pages/Home";

class App extends Component {
	state = {

	};

    render() {
        return (
            <div>
                <Router>
					<div>
						<Switch /> 
							<Route exact path="/" component={Home} />
					</div>
				</Router>
            </div>
        );
    }
}

export default App;
