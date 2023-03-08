import BookcaseModel from '../model/Bookcase.js';


class BookcaseRepository {
  create(_id) {
    try {
      const bookcase = new BookcaseModel({ _id })
      return bookcase.save()

    } catch (error) {
      console.log(error)
    }
  }

  update(_id, grid) {
    try {
      return BookcaseModel.updateOne(
        { _id },
        { $push: { grids: [grid._id] } }
      );
    } catch (error) {
      console.log(error)
    }
  }

  findAllBookcases() {
    try {
      return BookcaseModel.find().populate("grids")
    } catch (error) {
      console.log(error)
    }
  }

  async findOneBookcase(_id) {
    try {
      const [bookcase] = await BookcaseModel.find({ _id }).populate("grids")
      return bookcase
    } catch (error) {
      console.log(error)
    }
  }

  deleteBookcase(_id) {
    try {
      return BookcaseModel.findByIdAndDelete(_id)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new BookcaseRepository();
