import gridModel from "../model/Grid.js";

class GridRepository {
  async create(_id) {
    const grid = new gridModel({
      _id,
    });

   try {
    return await grid.save();
   } catch (error) {
    console.log(error);
   }
  }

  findAll() {
    gridModel.find((error, data) => {
      if (error) console.log(error);
      console.log(data);
      return data;
    })
  }
}
//const Grid = new GridRepository()
//Grid.findAll()
export default new GridRepository();
