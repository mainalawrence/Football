import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//import multer from 'multer'

const App=express();

 mongoose.connect('mongodb://127.0.0.1:27017/footballteam',()=>{
    console.log(`connected to the database`);
    
});

App.use(cors());

const port= process.env.PORT||2000;

App.listen(port,()=>{
    console.log(`listening at port ${port}`); 
})

