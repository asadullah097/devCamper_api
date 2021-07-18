const ErrorResponse=require('../utils/errorResponse');
const Bootcamp = require("../models/Bootcamp");

//@desc    get all bootcamps
//@route   Get api/v1/bootcamps
//access   public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            statusCode: 200,
            success: "true",
            data: bootcamps,
        });
    } catch (err) {
        res.status(404).json({
            statusCode: 404,
            success: "false",
            data: [],
        });
    }
};

//@desc    get single bootcamp
//@route   Get api/v1/bootcamps/:id
//access   public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({
            statusCode: 200,
            success: "true",
            data: bootcamp,
        });
    } catch (err) {
        next(new ErrorResponse(`Bootcamp are not found with the id ${req.params.id}`,404));
        
        // res.status(404).json({
        //     statusCode: 404,
        //     success: "false",
        //     data: [],
        // });
    }
};

//@desc    create new bootcamp
//@route   post api/v1/bootcamps
//access   private
exports.createBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        statusCode: 200,
        success: "true",
        data: bootcamp,
    });
};

//@desc    update bootcamps
//@route   PUT api/v1/bootcamps/:id
//access   private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(404).json({
            statusCode: 404,
            success: "true",
            data: bootcamp,
        });
    } catch (error) {
        next(new ErrorResponse(`Bootcamp are not found with the id ${req.params.id}`,404));
        // res.status(404).json({
        //     statusCode: 404,
        //     success: "true",
        //     data: []
        // });
    }
};

//@desc    Delete bootcamp
//@route   Delete api/v1/bootcamps/:id
//access   private
exports.deleteBootcamp = async (req, res, next) => {
   try {
    const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusCode: 200,
        success: "true",
        data: []
    });
   } catch (error) {
    next(new ErrorResponse(`Bootcamp are not found with the id ${req.params.id}`,404));
    // res.status(404).json({
    //     statusCode: 404,
    //     success: "true",
    //     data: []
    // });
   }
    res.status(200).json({
        success: "true",
        msg: `Delete bootcamp ${req.params.id}`,
    });
};
