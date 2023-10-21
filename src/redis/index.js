const redis = require("redis");
class RedisService {
	constructor() {
		this.client = redis.createClient({
			socket: {
				host: "redis-server",
				port: 6379
			},
		});
	}
	async getClient() {
		await this.client.connect();
		return this.client;
	}
}

module.exports = RedisService;