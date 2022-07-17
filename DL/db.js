const mongoose = require('mongoose');
require ("dotenv").config();

// let password=(process.env.PASSWORD)
// ${username+password}

const MONGO_URL = `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@cluster0.4olercn.mongodb.net/musicPlayer?retryWrites=true&w=majority`;

async function connect() {
    try {
        mongoose.connect(MONGO_URL,
            (err) => {
                if (err) throw err;
                else {
                    console.log("connection success!", mongoose.connection.readyState);
                }
            })
    }
    catch (err) {
        console.log("error mongoose",err);
    }

}

module.exports = { connect };
