import React, { Component } from "react";
import API from "../../utils/API";
import './SignUp.css';

//Components
import {Button, Input} from "../../components/Form";

class SignUp extends Component {
	state = {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password:"",
		passMatch:""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({submitted: true});
		if (
			this.state.username &&
			this.state.firstName &&
			this.state.lastName &&
			this.state.email &&
			this.state.password &&
			this.state.passMatch
		) {
			API.saveUser({
				username: this.state.username,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password
			}).then(response => {
				this.setState({validation: response.data})
			});
		}
	};

	usernameLabel = () => {
		if (this.state.validateUsername) {
			if (this.state.usernameAvailable) {
				return <span className="text-success">Username available &#10004;</span>
			} else if (!this.state.username) {
				return <span className="text-danger">Username unavailable!</span>
			}else {
				return <span>Checking username...</span>
			}	
		} else {
			return <span>Username</span>
		}
	};

	validateUsername = () => {
		this.setState({validateUsername: true});
		API.uniqueUsername(this.state.username).then(response => {
			this.setState({usernameAvailable: response.data})
		})
	};

	checkFirstName = () => {
		switch (this.state.submitted) {
			case true:
				if (this.state.firstName) {
					switch (this.state.validation) {
						case "firstName":
							return <span>Names must contain only letters.</span>;		
						default:
							return <span>First Name</span>
					}
				} else {
					return <span className="text-danger">You must enter a first name!</span>
					}
		
			default:
			return <span>First Name</span>;
		}
	};
	checkLastName = () => {
		switch (this.state.submitted) {
			case true:
				if (this.state.lastName) {
					switch (this.state.validation) {
						case "lastName":
							return <span>Names must contain only letters.</span>;		
						default:
							return <span>Last Name</span>
					}
				} else {
					return <span className="text-danger">You must enter a lastname!</span>
					}
			
			default:
			return <span>Last Name</span>;
		}
	};
	checkEmail = () => {
		switch (this.state.submitted) {
			case true:
				if (this.state.email) {
					switch (this.state.validation) {
						case "email":
							return <span>That is not a valid email.</span>;		
						default:
							return <span>Email</span>
					}
				} else {
					return <span className="text-danger">You must enter an email!</span>
					}
				
				default:
				return <span>Email</span>;
		}
	};
	checkPassword = () => {
		switch (this.state.submitted) {
			case true:
				if (this.state.password) {
					switch (this.state.validation) {
						case "password":
							return <span>That is not a valid password.</span>;		
						default:
							return <span>Password</span>
					}
				} else {
					return <span className="text-danger">You must enter an password!</span>
					}
		
				default:
				return <span>Password</span>;
		}
	};
	checkPassMatch = () => {
		switch (this.state.submitted) {
			case true:
				if (this.state.passMatch) {
					if (this.state.passMatch === this.state.password) {
						return <span className="text-success">Passwords match.</span>
					} else {
						return <span className="text-danger">Passwords do not match!</span>
					}
				} else {
					return <span className="text-danger">You must enter an password!</span>
				}

				default:
				return <span>Retype Password</span>;
		}
	};

	render() {
		return(
		<div className="container mt-2">
			<h4>Just answer a few questions and Hit the Ice to start breaking.</h4>
			<hr/>
			<form className="form-group" noValidate onSubmit={this.handleSubmit}>
				{/*Username*/}
				<Input
					autoComplete="username"
					autoFocus
					className="form-control"
					id="username"
					name="username"
					onChange={this.handleInputChange}
					onBlur={this.validateUsername}
					placeholder="Username" 
					required
					type="text"
				/>
				<label htmlFor="username">{this.usernameLabel()}</label>
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
				<label htmlFor="firstName">{this.checkFirstName()}</label>
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
				<label htmlFor="lastName">{this.checkLastName()}</label>
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
				<label htmlFor="email">{this.checkEmail()}</label>
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
				<label htmlFor="password">{this.checkPassword()}</label>
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
				<label htmlFor="passMatch">{this.checkPassMatch()}</label>
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