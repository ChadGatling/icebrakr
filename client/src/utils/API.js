// import axios from "axios";
const axios = require("axios");

export default {
	getUsers: () => {
		return axios.get("/api/users");
	}
}