// import axios from "axios";
const axios = require("axios");

export default {
	// Setup server session
    session: function() {
        return axios.get("/api/utils/session")
    },
    // Logs in user
    logIn: (userData) => {
    	return axios.post("/api/utils/login", userData)
    },
    // Gets all users
	getUsers: () => {
		return axios.get("/api/users")
	}
}