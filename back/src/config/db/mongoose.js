import mongoose from 'mongoose';

mongoose.connect('mongodb://root:example@localhost:27017/').then(() => console.log("conectado"))

const Schema = mongoose.Schema;

const Grid = new Schema({
  _id: Number,
  line1: Number,
  line2: Number
});

const MyModel = mongoose.model('Grid', Grid);

const instance = new MyModel();
instance._id = 1
instance.line1 = 1
instance.line2 = 1

instance.save(function (err) {
    console.log(err)
  });


