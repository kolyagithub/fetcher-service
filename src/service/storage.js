const RedisService = require("../redis");

class StorageService {
	
	constructor() {}
	
	async saveToken(token) {
		
		let redisClient = null;
		
		try {
			
			redisClient = await new RedisService().getClient();
			await redisClient.set("token", token);
			
		} catch (err) {
			console.error("Catch exception in saveToken(). Error: " + err.message);
		} finally {
			if(redisClient)
				redisClient.quit();
		}
		
	}
	
	async getToken() {
		
		let redisClient = null;
		
		try {
			
			redisClient = await new RedisService().getClient();
			return await redisClient.get("token");
			
		} catch (err) {
			console.error("Catch exception in getToken(). Error: " + err.message);
			return null;
		} finally {
			if(redisClient)
				redisClient.quit();
		}
		
	}
	
}

module.exports = StorageService;