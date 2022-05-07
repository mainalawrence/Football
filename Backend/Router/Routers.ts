import express, { Router } from "express";
import playerModel from '../Models/player'
import multer from "multer";
const upload = multer({ dest: 'uploads/' })
const route=Router();

route.get('/',async(req:express.Request,res:express.Response)=>{
  try {
    const result= await playerModel.find()
    res.json(result);

  } catch (error) {
      res.json(error);
  }
})
route.post('/',upload.single('image'),async(req:express.Request,res:express.Response)=>{
   const {id,firstname,lastname,dob,position,salary}=req.body;
    const image=req.file;
    try {
    const PlayerModel=new playerModel( {id, firstname, lastname, dob, position,salary, image })
       const newPlayer= await PlayerModel.save();
    res.json(newPlayer);
    } catch (error) {
       res.json(error); 
    }
    
})

route.put('/:id',async(req:express.Request,res:express.Response)=>{
    const {id,firstname,lastname,dob,position,salary}=req.body;
    const image=req.file;
    try {
        const PlayerModel=new playerModel( {id, firstname, lastname, dob, position,salary, image })
        const newPlayer= await PlayerModel.update(PlayerModel);
     res.json(newPlayer);
    } catch (error) {
        res.status(500).json(error)
    }
    
})

route.delete('/:id',async(req:express.Request,res:express.Response)=>{
    try {
      await playerModel.remove();

        res.json({message:"successful"})
    } catch (err) {
        res.status(500).json({err})
    }
    
})

export default route;
