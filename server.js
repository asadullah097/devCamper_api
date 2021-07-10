const express = require("express");

const dotenv = require("dotenv");

const morgan=require('morgan');

dotenv.config({ path: "./config/config.env" });

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
  console.log(`server is runing in port ${PORT}`);
});
