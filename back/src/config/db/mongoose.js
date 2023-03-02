import mongoose from 'mongoose';


export default mongoose
  .connect('mongodb://root:example@localhost:27017/')
  .then(() => console.log('connected'));



//const bookcaseModel = mongoose.model('Bookcase', {
//  _id: Number,
//  grid: [{ type: Number, ref: 'Grid' }],
//});

//const grid = new gridModel({
//  _id: 1,
//  line1: 1,
//  line2: 1,
//});

//grid.save(async (error, grid) => {
//  if (error) console.log(error);
//
//  const bookcase = new bookcaseModel();
//
//  bookcase._id = 1;
//  bookcase.grid = grid._id;
//
//  bookcase.save((error) => {
//    console.log(error);
//  });

  //bookcaseModel.updateOne(
  //  { _id: new ObjectId('63f697d541ca7c5faa307204') },
  //  { $push: { grid: [grid._id] } },
  //  (error, res) => {
  //    if (error) console.log(error);
//
  //    console.log(res);
  //  }
  //);
//});

//bookcaseModel
//  .find()
//  .populate('grid')
//  .exec((error, bookcaseModel) => {
//    if (error) console.error(error);
//    console.log(bookcaseModel[0].grid);
//  });
