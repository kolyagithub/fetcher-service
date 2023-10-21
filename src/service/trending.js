const axios = require("axios");

class TrendingService {
	
	constructor() {}
	
	async getUserBalance(token) {
		
		try {
			
			const url = "https://trending.bid/api/user/getprofile";
			const options = {
				method: "GET",
				headers: {
					"Cookie": `PHPSESSID=${token}`
				}
			};
			const res = await axios.get(url, options);
			let data = res.data.data;
			return {
				status: 200,
				message: null,
				balance: data.balance
			};
			
		} catch (err) {
			
			console.error("Catch exception in getUserBalance(). Error: " + err.message);
			if (err.response) {
				return {
					status: err.response.status,
					message: err.response.data.message,
					balance: null
				}
			} else {
				return {
					status: 500,
					message: "Internal server error",
					balance: null
				}
			}
			
		}
		
	}
}

module.exports = TrendingService;