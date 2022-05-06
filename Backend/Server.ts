import Express from 'express'
import mongoose from 'mongoose';

const App=Express();

 mongoose.connect('mongodb://127.0.0.1:27017/footballteam',()=>{
    console.log(`connected to the database`);
    
});

const port= process.env.PORT||2000;
App.listen(port,()=>{
    console.log(`listening at port ${port}`); 
})

