import React, { Component } from "react";

//Components
import {Button} from "../../components/Form";

class Landing extends Component {
	state = {

	};

	render() {
		return(
		<div className="container mt-2">
			<h4 className="">
				Sign in to your account or sign up to start breaking the ice.
			</h4>
			<hr/>
			<form className="form-group">
				<div className="form-row">
					<div className="col-sm">
						<Button
							children="Log in"
							className="form-control btn btn-light"
							onClick={() => this.props.history.push("/login")}
						/>
					</div>
					<div className="col-sm">
						<Button
							children="Sign up"
							className="form-control btn btn-light"
							onClick={() => this.props.history.push("/signup")}
						/>
					</div>
				</div>
			</form>
			<hr/>
		</div>
		)
	}
};

export default Landing;