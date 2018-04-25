import React, { Component } from "react";
import './SignUp.css';

//Components
import {Button, Input} from "../../components/Form";

class SignUp extends Component {
	state = {

	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};

	handleSubmit = event => {
		event.preventDefault();
	};

	render() {
		return(
		<div className="container mt-2">
			<h4>Just answer a few questions and Hit the Ice to start breaking.</h4>
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
				<label for="username">Username</label>
				{/*First name*/}
				<Input
					className="form-control"
					id="firstName"
					name="firstName"
					onChange={this.handleInputChange}
					placeholder="First name" 
					required
					type="text"
				/>
				<label for="firstName">First name</label>
				{/*Last name*/}
				<Input
					className="form-control"
					id="lastName"
					name="lastName"
					onChange={this.handleInputChange}
					placeholder="Last name" 
					required
					type="text"
				/>
				<label for="lastName">Last Name</label>
				{/*Email*/}
				<Input
					className="form-control"
					id="email"
					name="email"
					onChange={this.handleInputChange}
					placeholder="Email" 
					required
					type="email"
				/>
				<label id="email">Email</label>
				{/*Password*/}
				<Input
					className="form-control"
					id="password"
					name="password"
					onChange={this.handleInputChange}
					placeholder="Password" 
					required
					type="password"
				/>
				<label for="password">Password</label>
				{/*Password match*/}
				<Input
					className="form-control"
					id="passMatch"
					name="passMatch"
					onChange={this.handleInputChange}
					placeholder="Retype password" 
					required
					type="password"
				/>
				<label for="passMatch">Retype password</label>
				<Button
					children="Hit the Ice"
					className="form-control btn btn-light"
				/>
			</form>
			<hr/>
		</div>
		)
	}
};

export default SignUp;