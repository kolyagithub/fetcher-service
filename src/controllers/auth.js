const StorageService = require("../service/storage");

module.exports = {
    
    auth: async (req, res) => {
        
        try {
            
            if(!req.body?.token) {
                return res.status(400).send({status: false, message: "Token field is missing"}).end();
            }
            
            let token = req.body.token;
           
            let storage = new StorageService();
            await storage.saveToken(token);
            
            res.status(200).send({success: true}).end();
            
        } catch (err) {
            console.error("Catch exception in /auth. Error: " + err.message);
            res.status(500).send({status: false, message: "Internal error"}).end();
        }
        
    }
    
};