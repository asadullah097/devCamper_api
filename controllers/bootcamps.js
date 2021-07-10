//@desc    get all bootcamps
//@route   Get api/v1/bootcamps
//access   public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: "true",
    msg: "Show All bootcamps",
  });
};

//@desc    get single bootcamp
//@route   Get api/v1/bootcamps/:id
//access   public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: "true",
    msg: `show bootcamp ${req.params.id}`,
  });
};

//@desc    create new bootcamp
//@route   post api/v1/bootcamps
//access   private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: "true",
    msg: "create new bootcamp",
  });
};

//@desc    update bootcamps
//@route   PUT api/v1/bootcamps/:id
//access   private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: "true",
    msg: `update bootcamp ${req.params.id}`,
  });
};

//@desc    Delete bootcamp
//@route   Delete api/v1/bootcamps/:id
//access   private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: "true",
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
