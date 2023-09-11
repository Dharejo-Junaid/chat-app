const mongoose = require("mongoose");

// env variables;
const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async (server) => {
    
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connected...");
        
        server.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        });
    }

    catch(err) {
        console.log("Connection fail");
        console.log(err.message);
    }
}

module.exports = connectDB;