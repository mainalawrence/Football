import mongoose from "mongoose";
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const playerModel = new Schema({
  id: String,
  firstname: String,
  lastname: String,
  dob: Date,
  position:String,
  salary:String,
  image:{type:Buffer, data: Buffer, contentType: String }
});


export default mongoose.model('playerModel',playerModel);