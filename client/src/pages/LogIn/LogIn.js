import React, { Component } from "react";
import API from "../../utils/API";

//Components
import {Input, Button} from "../../components/Form";

class LogIn extends Component {
	state = {

	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();				

		API.logIn({
			username: this.state.username,
			password: this.state.password
		}).then(response => {});	
	};

	render() {
		return(
		<div className="container mt-2">
			<h4>Welcome back! log in to break the ice.</h4>
			<hr/>
			<form className="form-group" onSubmit={this.handleSubmit}>
				{/*Username*/}
				<Input
					autoComplete="username"
					autoFocus
					className="form-control"
					id="username"
					name="username"
					onChange={this.handleInputChange}
					placeholder="Username" 
					required
					type="text"
				/>
				<label htmlFor="username">Username</label>
				{/*Password*/}
				<Input
					autoComplete="current-password"
					className="form-control"
					id="password"
					name="password"
					onChange={this.handleInputChange}
					placeholder="Password" 
					required
					type="password"
				/>
				<label htmlFor="password">Password</label>
				<Button
					children="Hit the Ice"
					className="form-control btn btn-light"
					type="submit"
				/>
			</form>
			<hr/>
		</div>
		)
	}
};

export default LogIn;	