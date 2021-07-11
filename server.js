const express = require("express");

const dotenv = require("dotenv");

const morgan=require('morgan');

const colors=require('colors');

const connectDB=require('./config/db')

dotenv.config({ path: "./config/config.env" });

//monogb connection
connectDB();
//routes files
const bootcamps = require("./routes/bootcamps");

const app = express();

//dev logging middleware
if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'))
}
//,ounts route
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`.yellow.bold);
});

//handle unhandle promise rejections
process.on('unhandledRejection',(err,promise)=>{
  console.log(`Error :${err.message}`.red);
  server.close(()=>process.exit(1))
});
