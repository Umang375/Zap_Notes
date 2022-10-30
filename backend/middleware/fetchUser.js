const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;

const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object

  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, key);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
    console.log(error)
  }
  
};

module.exports = fetchUser;