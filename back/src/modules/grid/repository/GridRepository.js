import GridModel from "../model/Grid.js";

class GridRepository {

  create(_id) {
    try {
      const grid = new GridModel({
        _id,
      });

      return grid.save();
    } catch (error) {
      console.log(error);
    }
  }

  update(_id, line) {
    return GridModel.updateOne({
      _id
    }, line)
  }

  findAllGrids() {
    try {
      return GridModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  findOneGrid(_id) {
    try {
      return GridModel.findById(_id);
    } catch (error) {
      console.log(error);
    }
  }

  delete(_id) {
    try {
      return GridModel.deleteOne({ _id });
    } catch (error) {
      console.log(error);
    }
  }

}

let line = {
  line2: 7
}
const Grid = new GridRepository()
console.log(await Grid.delete(1))
export default new GridRepository();
