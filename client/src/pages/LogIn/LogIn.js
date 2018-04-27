import React, { Component } from "react";
import API from "../../utils/API";

//Components
import {Input, Button} from "../../components/Form";

console.log("Domain", document.domain);

class LogIn extends Component {
	state = {
	};

	componentDidMount() {
		if (document.domain === "localhost") {

		}
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({validation: "submitted"})

		if (!this.state.username) {
			this.setState({validation: "noUsername"})
		}

		if (!this.state.password) {
			this.setState({validation: "noPassword"})
		}

		if(!this.state.username && !this.state.password) {
			this.setState({validation: "noInput"})
		}

		if (this.state.username && this.state.password) {
			API.logIn({
				username: this.state.username,
				password: this.state.password
			}).then(response => {
				this.setState({validation: response.data})
				if (response.data === "granted") {
					this.props.history.push("/account")
				}
			});	
		}
	};

	checkUsername = () => {
		switch (this.state.validation) {
			case "username":
				return <span className="text-danger">Sorry, that username can't be found</span>;
				break;
			case "password":
				return <span className="text-success">Username found &#10004;</span>
				break;
			case "granted":
				return <span className="text-success">Username found &#10004;</span>;
				break;
			case "noUsername":
				return <span className="test-danger">You must enter a username</span>;
				break;
			case "noInput":
				return <span className="test-danger">You must enter a username</span>;
				break;
			case "submitted":
				return "Checking...";
				break;
			default:
				return "Username";
		}
	};

	checkPassword = () => {
		switch (this.state.validation) {
			case "username":
				return "Please use a valid username to check password";
				break;
			case "password":
				return <span className="text-danger">Sorry that password is incorrect</span>;
				break;
			case "granted":
				return <span className="text-success">Password valid &#10004;</span>;
				break;
			case "submitted":
				return "Checking...";
				break;
			default:
				return "Password";
		}
	};

	render() {
		return(
		<div className="container mt-2">
			<h4>Welcome back! log in to break the ice.</h4>
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
					placeholder="Username" 
					required
					type="text"
				/>
				<label htmlFor="username">{this.checkUsername()}</label>
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
				<label htmlFor="password">{this.checkPassword()}</label>
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