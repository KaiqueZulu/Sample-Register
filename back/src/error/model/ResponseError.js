import * as httpStatus from '../../config/constants/httpStatus.js';


export default class ResponseError{
  constructor(error){
    this.status = error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR;
    this.message = error.message;
  }
  
}