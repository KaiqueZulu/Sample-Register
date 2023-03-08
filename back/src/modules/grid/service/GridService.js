import GridRepository from '../repository/GridRepository.js';

class GridService {
    async create(_id) {
         let data = await GridRepository.create(_id)
         console.log('dados:', data)
        //const bookcase = new bookcaseModel();

        //bookcase._id = 1;
        //bookcase.grid = grid._id;

        //bookcase.save((error) => {
        //  console.log(error);
        //});

        //bookcaseModel.updateOne(
        //    { _id: 1 },
        //    { $push: { grid: [grid._id] } },
        //    (error, res) => {
        //      if (error) console.log(error);
        //  
        //      console.log(res);
        //    }
        //  );
    }
}
const service = new GridService()
service.create(4)

export default new GridService()