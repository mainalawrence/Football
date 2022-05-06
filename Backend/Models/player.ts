import mongoose from "mongoose";
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const PlayerModel = new Schema({
  id: String,
  firstname: String,
  lastname: String,
  dob: Date,
  position:String,
  salary:String,
  image:{ data: Buffer, contentType: String }
});