const express = require("express");

const dotenv = require("dotenv");

const morgan=require('morgan');

const colors=require('colors');

const errorhandler=require('./middleware/error');
const connectDB=require('./config/db')

dotenv.config({ path: "./config/config.env" });

//routes files
const bootcamps = require("./routes/bootcamps");

const app = express();

//monogb connection
connectDB();
//body parser
app.use(express.json());
//dev logging middleware
if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'))
}
//,ounts route
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorhandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`.yellow.bold);
});

//handle unhandle promise rejections
process.on('unhandledRejection',(err,promise)=>{
  console.log(`Error :${err.message}`.red);
  server.close(()=>process.exit(1))
});
