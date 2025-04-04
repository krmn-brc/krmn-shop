const path = require("path");
const root = path.dirname(require.main.filename);

const asyncErrorWrapper = require(root + "/helpers/errors/errorWrapper");

const {
    searchHelper,
    paginationHelper,

} = require("./queryMiddlewaresHelpers");

const queryMiddleware = function(model, options){
    return asyncErrorWrapper(async function(req,res,next) {
    let query = model.find({});
    
    if (options && options.searchKey) {
      
        query = searchHelper(options.searchKey,query,req);
    }
       
        const paginationResults = await paginationHelper(model, query, req)
        query = paginationResults.query;
        let pagination = paginationResults.pagination;
        


        const advanceQueryResults = await query;
    
        res.advanceQueryResults = {
            success : true,
            count : advanceQueryResults.length,
            pagination: pagination,
            data : advanceQueryResults
        };
       
        next();
    })  
}; 

module.exports = queryMiddleware;