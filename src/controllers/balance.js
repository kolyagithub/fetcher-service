const _ = require("underscore");
const TrendingService = require("../service/trending");
const StorageService = require("../service/storage");

module.exports = {
    
    getAll: async (req, res) => {
        
        try {
            
            let storage = new StorageService();
            let token = await storage.getToken();
            if(_.isNull(token)) {
                console.error("Token not found in storage");
                return res.status(400).send({status: false, message: "Token not found"}).end();
            }
            
            let trending = new TrendingService();
            const { status, message, balance} = await trending.getUserBalance(token);
            if(_.isNull(balance)) {
                return res.status(status).send({status: false, message: message}).end();
            }
            
            res.status(status).send({status: true, data: { balance: balance }}).end();
            
        } catch (err) {
            console.error("Catch exception in /balance. Error: " + err.message);
            res.status(500).send({status: false, message: "Internal server error"}).end();
        }
        
    }
    
}