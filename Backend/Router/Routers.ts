import express, { Router } from "express";
import playerModel from '../Models/player'
import multer from "multer";
const route=Router();

const upload = multer({ dest: 'uploads/' })

route.get('/',async(req:express.Request,res:express.Response)=>{
  try {
    const result= await playerModel.find()
    res.json(result);

  } catch (error) {
      res.json(error);
  }
})
route.post('/',upload.single('image'),async (req,res)=>{
    const {firstname,lastname,dob,position,salary}=JSON.parse(req.body.data);
    const image=req.file?.filename;
    try {

        const PlayerModel=new playerModel({firstname, lastname, dob, position,salary ,image})
        const newPlayer= await PlayerModel.save();
        res.json(newPlayer);
        console.log(newPlayer);
        } catch (error) {
            console.log("Error: "+error);
           res.json(error); 
        }  
})

route.put('/:id',async(req:express.Request,res:express.Response)=>{
    const {_id,firstname,lastname,dob,position,salary}=req.body;
    const image=req.file;
    try {
        const PlayerModel=new playerModel( {_id, firstname, lastname, dob, position,salary, image })
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
