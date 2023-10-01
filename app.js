const express=require('express');
const router = require('./src/routes/api');
app= new express();

//security middleware import
const rateLimit=  require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xssClean=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');

//security middleware implement
app.use(cors());
app.use(hpp());
app.use(xssClean());
app.use(mongoSanitize());
app.use(helmet());


//request rate limiting
const limiter=rateLimit({
    windowMs:15*60*100,
    max:100//limit each ip 100 requests per windowms
});
app.use(limiter);



app.use('/api',router);


// undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({status:"Failed",data:"No Found"});
});

module.exports=app;