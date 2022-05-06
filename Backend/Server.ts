import Express from 'express'
import mongoose from 'mongoose';

const App=Express();


await mongoose.connect('mongodb://localhost/my_database',()=>{
    console.log(`connected to the database`);
    
});

const port= process.env.PORT||2000;
App.listen(port,()=>{
    console.log(`listening at port ${port}`); 
})