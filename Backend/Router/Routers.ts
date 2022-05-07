import express, { Router } from "express";
import playerModel from '../Models/player'
import multer from "multer";
const route=Router();

route.get('/',async(req:express.Request,res:express.Response)=>{
  try {
    const result= await playerModel.find()
    res.json(result);

  } catch (error) {
      res.json(error);
  }
})
route.post('/',async(req:express.Request,res:express.Response)=>{
    const {id,firstname,lastname,dob,position,salary,image}=req.body;
    const PlayerModel=new playerModel( {
            id,
            firstname,
            lastname,
            dob,
            position,
            salary,
            image
        })
    try {
        const newPlayer= await PlayerModel.save();
        res.json(newPlayer);
    } catch (error) {

       res.json(error); 
    }
    
})

route.put('/',async(req:express.Request,res:express.Response)=>{
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
    
})

route.delete('/',async(req:express.Request,res:express.Response)=>{
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
    
})

export default route;
