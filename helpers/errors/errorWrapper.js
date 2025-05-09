const asyncErrorWrapper = function(asyncFunction)
{
     return function(req, res, next)
     {
        asyncFunction(req, res, next).catch(next)
     }
}

module.exports = asyncErrorWrapper