const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

async function createJToken(_id) {
    return jwt.sign({ _id }, secret, { expiresIn: "7d" });
    
}
// console.log(createJToken("new ObjectId(630b65e74e510317b8d177bd)"))
function validateJToken(token) {
    return jwt.verify(token, secret);
}
module.exports = { createJToken, validateJToken };