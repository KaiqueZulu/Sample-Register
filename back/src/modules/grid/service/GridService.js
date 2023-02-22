import GridRepository from '../repository/GridRepository.js';

//let all =await GridRepository.create()
let one = await GridRepository.findGrid();
console.log(JSON.stringify(one));
