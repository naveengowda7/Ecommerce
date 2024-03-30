const appErr = require("../utils/appErr");

const protected = (req, res, next) => {
  // *check if user is logged in
  if (req.session.userAuth) {
    next();
  } else {
    next(appErr("Not Authorized, Login again"));
  }
};
module.exports = protected;
