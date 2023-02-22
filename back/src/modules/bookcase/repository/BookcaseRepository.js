import Bookcase from '../model/Bookcase.js';

class BookcaseRepository {
  async create() {
    try {
      for (let interactor = 1; interactor <= 12; interactor++) {
        await Bookcase.create({ id: interactor });
      }
      return await Bookcase.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findSample(line, column) {
    try {
      return await Bookcase.findOne({
        where: { id: column },
        attributes: [`line${line}`],
      });
    } catch (error) {
      console.log(error);
    }
  }
  async findGrid() {
    try {
      return await Bookcase.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BookcaseRepository();
