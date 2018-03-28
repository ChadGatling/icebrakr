import React from "react";
import { Circle, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Atlas = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        zoom={props.zoom}
        center={props.center}>

        {props.isCircleShown && <Circle 
            center={props.center}
            radius={props.radius}/>}

        {props.isMarkerShown && <Marker position={props.center} />}
    </GoogleMap>
))

export default Atlas;