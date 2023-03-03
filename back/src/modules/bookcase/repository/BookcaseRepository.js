import BookcaseModel from '../model/Bookcase.js';

class BookcaseRepository {
  async create() {
    const bookcase = new BookcaseModel({_id: 1})
    const data = await  bookcase.save()
    console.log(data)
  }

  findSample(line, column) {

  }
  findGrid() {

  }
}

const test = new BookcaseRepository();
test.create()

export default new BookcaseRepository();
