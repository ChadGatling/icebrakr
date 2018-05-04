import React, { Component } from "react";
import API from "../../utils/API";

class Account extends Component {
	state = {

	};

	componentDidMount() {
		API.session().then(response => {
			if (response.data) {				
				this.setState({
					access: response.data.access,
					firstName: response.data.firstName,
					lastName: response.data.lastName,
					username: response.data.username
				});
			} else {

			};
		});
	};

	render() {
		return(
		<div className="container mt-2">
			<h3>Account Info</h3>
				<div>
					<div>Username: {this.state.username}</div>
					<div>Name: {this.state.firstName} {this.state.lastName}</div>
					<div>Access level: {this.state.access}</div>
				</div>

			<h3>other info</h3>	
		</div>
		)
	}
};

export default Account;