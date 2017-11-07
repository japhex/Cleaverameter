// Middleware to set session variables on each request.
module.exports = (req, res, next) => {
    if (nameSearch !== undefined) {
        whereClause = {$or: [{name:{$like:'%' + searchTerm + '%'},description:{$like:'%' + searchTerm + '%'}}]};
    } else if (valueSearch !== undefined) {
        whereClause = {value:{$like:'%' + searchTerm + '%'}};
    }

    next();
};
