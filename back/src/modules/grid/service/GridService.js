import GridRepository from '../repository/GridRepository.js';

class GridService {
    async create() {
         let data = await GridRepository.create(3)
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
//const service = new GridService()
//service.create()

export default new GridService()