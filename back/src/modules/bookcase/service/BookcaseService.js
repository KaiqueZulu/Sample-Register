import BookcaseRepository from '../repository/BookcaseRepository.js';

//let all =await GridRepository.create()
let one = await BookcaseRepository.findGrid();
console.log(JSON.stringify(one));
