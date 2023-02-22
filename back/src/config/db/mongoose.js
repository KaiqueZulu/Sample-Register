import mongoose, { Types } from 'mongoose';

let ObjectId = Types.ObjectId;

mongoose
  .connect('mongodb://root:example@localhost:27017/')
  .then(() => console.log('connected'));

const gridModel = mongoose.model('Grid', {
  line1: Number,
  line2: Number,
});

const bookcaseModel = mongoose.model('Bookcase', {
  grid: [{ type: Types.ObjectId, ref: 'Grid' }],
});

const grid = new gridModel({
  line1: 1,
  line2: 1,
});

grid.save(async (error, grid) => {
  if (error) console.log(error);

  const bookcase = new bookcaseModel();

  //bookcase.grid = grid._id;

  //bookcase.save((error) => {
  //  console.log(error);
  //});

  bookcaseModel.updateOne(
    { _id: new ObjectId('63f697d541ca7c5faa307204') },
    { $push: { grid: [grid._id] } },
    (error, res) => {
      if (error) console.log(error);

      console.log(res);
    }
  );
});

bookcaseModel
  .find()
  .populate('grid')
  .exec((error, bookcaseModel) => {
    if (error) console.error(error);
    console.log(bookcaseModel);
  });
