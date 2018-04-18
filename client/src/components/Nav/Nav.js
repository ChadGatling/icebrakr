import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import API from "../../utils/API";

var Style = {
	color: "white"
    // backgroundImage: "url(https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/karaoke-background_GJWDxYBO_SB_PM.jpg)"
};

class Nav extends Component {
	state = {
		username: "",
		firstName: "",
		song: "",
		artist: "",
		comment: "",
		lat: null,
		lng: null
	};

	componentDidMount() {
	};

	handleLogout = event => {
		event.preventDefault();

		API.logOut()
			.then(
				this.props.history.push("/")
			);
	};

	render() {
		return(
			<div className="">
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
					<a className="navbar-brand" href="/">iceBrakr</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home {/*<span className="sr-only">(current)</span>*/}</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/location">Map</a>
							</li>
							{/*<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Dropdown
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Action</a>
									<a className="dropdown-item" href="#">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Something else here</a>
								</div>
							</li>*/}
							<li className="nav-item">
								<a className="nav-link" href="/signup">Sign up</a>
							</li>
						</ul>
						{/*<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>*/}
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Nav);