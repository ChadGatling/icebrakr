import React, { Component } from "react";

//Components
import {Input, Button} from "../../components/Form";

class LogIn extends Component {
	state = {

	};

	render() {
		return(
		<div className="container mt-2">
			<h4>Welcome back! log in to break the ice.</h4>
			<hr/>
			<form className="form-group">
				{/*Username*/}
				<Input
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
				<Button
					children="Hit the Ice"
					className="form-control btn btn-light"
					onClick={this.handleSubmit}
				/>
			</form>
			<hr/>
		</div>
		)
	}
};

export default LogIn;	