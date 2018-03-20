import React, { Component } from "react";
import Map from "../Map";

class Container extends Component {
	state = {

	};

	render() {
		const style = {
			width: '100vw',
			height: '100vh'
		}
		return (
			<div style={style}>
				<Map google={this.props.google}/>
			</div>
			)
	}
};

export default GoogleApiComponent({
	apiKey: __GAPI_KEY__
})(Container)