import React, { Component } from 'react';
import Map from "./components/Map";
// import logo from './logo.svg';
import './App.css';

// Modules

const mapApi = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXqBRpEhk0PjeW03sann5iSRNZEyBn4ew&callback=this.initMap"

class App extends Component {
	state = {

	};

    render() {
        return (
            <div>
            	<Map/>
            </div>
        );
    }
}

export default App;
