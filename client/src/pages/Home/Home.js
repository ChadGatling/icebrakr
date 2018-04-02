import React, { Component } from "react";
import Atlas from "../../components/Atlas";

class Home extends Component {
    state = {
        lat: 30.267,
        lng: -97.743
    };

    componentWillMount() {
        this.getLocation()
    };

    componentDidMount() {
    };

    getLocation = () => {
        if (navigator.geolocation) {
            console.log("Getting location");
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    showPosition = (position) => {
        console.log("Setting state");
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
        console.log(this.state)
    };

    render() {
        return (
            <div className="">
                <div className="">
                    <Atlas
                        isCircleShown
                        isMarkerShown
                        zoom={12}
                        center={{ 
                            lat: this.state.lat, 
                            lng: this.state.lng 
                        }}
                        radius={500}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXqBRpEhk0PjeW03sann5iSRNZEyBn4ew&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `calc(100vh - 30px)` }} />}
                        mapElement={<div style={{ height: `100%` }} />}/>
                </div>
            </div>
        );
    }
};

export default Home;
