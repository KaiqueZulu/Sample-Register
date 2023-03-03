import mongoose from "mongoose";
import "../../../config/db/mongoose.js";

const BookcaseModel = mongoose.model('Bookcase', {
  _id: Number,
  grid: [{ type: Number, ref: 'Grid' }],
});

export default BookcaseModel;
