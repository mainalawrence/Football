import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Router from './Router/Routers';
//import multer from 'multer'

const App=express();
App.use(cors());

//connect to db
 mongoose.connect('mongodb://127.0.0.1:27017/footballteam',()=>{
    console.log(`connected to the database`);   
});
//routs

App.use("/",Router);

const port= process.env.PORT||2000;

App.listen(port,()=>{
    console.log(`listening at port ${port}`); 
})

