import React, { Component } from "react";
import API from "../../utils/API";

class Account extends Component {
	state = {

	};

	componentDidMount() {
		API.session().then(response => {
				console.log(response);
		})
	};

	render() {
		return(
		<div>
			Account page
			username
			name
			email
			other info
		</div>
		)
	}
};

export default Account;