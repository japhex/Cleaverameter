// Middleware to set session variables on each request.
module.exports = (req, res, next) => {
    res.locals.clientId = req.session.clientId;
    res.locals.clientName = req.session.clientName;

    next();
};
