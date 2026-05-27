const { verifyAccessToken } = require("../utils/jwt");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json("Unauthorized-2");
  }
};

const authAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const accessToken = token.split(" ")[1];

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    // level = 1 => admin
    if (decoded.level !== 1) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = {
  authMiddleware,
  authAdmin,
};
