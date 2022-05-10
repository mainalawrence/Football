import mongoose from "mongoose";
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const playerModel = new Schema({
  firstname: String,
  lastname: String,
  dob: String,
  position:String,
  salary:String,
  image:String
});


export default mongoose.model('playerModel',playerModel);