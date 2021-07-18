const errorHandler = (err, req, res, next) => {
    console.log("working",err.stack.red);
    res.status(err.statusCode || 500).json({
    success:false,
    error:err.message || 500
    });
}

module.exports = errorHandler;