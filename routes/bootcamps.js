const express=require('express')

const router=express.Router();

//get all bootcamps

router.get('',(req,res)=>{
 res.status(200).json({
  success:"true",
  msg:"Show All bootcamps"
 });
});

//show single bootcamp

router.get('/:id',(req,res)=>{
    res.status(200).json({
        success:"true",
        msg:`show bootcamp ${req.params.id}`
    });
})

//save new bootcamp
router.post('',(req,res)=>{
    res.status(200).json({
     success:"true",
     msg:"create new bootcamp"
    });
});
   
//update new bootcamp

router.put('/:id',(req,res)=>{
    res.status(200).json({
        success:"true",
        msg:`update bootcamp ${req.params.id}`
    });
})

//delete bootcamps

router.delete('/:id',(req,res)=>{
    res.status(200).json({
        success:"true",
        msg:`Delete bootcamp ${req.params.id}`
    });
})
module.exports=router; 