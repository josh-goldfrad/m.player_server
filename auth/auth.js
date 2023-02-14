const { validateJToken } = require("./jwt");


const authJWT = async (req, res, next) => {
    const authHeader = req.headers?.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const verifyToken = validateJToken(token, process.env.JWT_SECRET);
        // console.log(11, verifyToken);
        req.user = verifyToken._id
        // console.log(12);
        // req.user = await readOne({ _id: verifyToken._id });    
        next()
    } else {
        res.sendStatus(401);
    }
};


module.exports = { authJWT }