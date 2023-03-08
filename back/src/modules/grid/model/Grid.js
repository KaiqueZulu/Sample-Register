import mongoose from "mongoose";
import "../../../config/db/mongoose.js";

const GridModel = mongoose.model('Grid', {
  _id: Number,
  line1: {type: Number, default: 0},
  line2: {type: Number, default: 0},
});

//const Grid = {
//  1: ['a1', 'a2', 'a3'],
//  2: ['a4', 'a5', 'a6'],
//  3: ['a7', 'a8', 'a9'],
//};

//gridModel.find((arg, arg1) => {
//  console.log(arg)
//  console.log(arg1)
//
//})


export default GridModel;
