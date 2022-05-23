import SampleRepository from '../repository/SampleRepository.js';
import SampleException from '../exception/SampleException.js';
import * as httpStatus from '../../../config/constants/httpStatus.js';
import {
  addMinutes
} from 'date-fns';

class SampleService {

  async createSample(req) {
    try {
      const {
        type,
        code,
        shelfLife
      } = req.body;
      const deadline = addMinutes(new Date(), shelfLife);
      const result = await SampleRepository.create(type, code, deadline);
      if (!result) {
        throw new SampleException(httpStatus.NOT_ACCEPTABLE, 'Sample not registered!');
      }
      const response = {
        status: httpStatus.CREATED,
        sample: result.dataValues,
      };
      return response;
    } catch (err) {
      return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }
  async findSamplesAll() {
    try {
      const sample = await SampleRepository.findAll();
      return {
        status: httpStatus.SUCCESS,
        samples: sample,
        consolidated: sample.length
      };
    } catch (err) {
      return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }
  async findByCode(req) {
    try {
      const {
        code
      } = req.params;
      const sample = await SampleRepository.findOne({
        code
      });
      if (sample === null) {
        throw new SampleException(httpStatus.NOT_FOUND, 'Sample not found. ');
      }
      return {
        status: httpStatus.SUCCESS,
        sample: sample.dataValues
      };
    } catch (err) {
      return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async findByType(req) {
    try {
      const {
        type
      } = req.params;
      if (type == 'sangue' || type == 'urina') {
        const sample = await SampleRepository.findAll({
          type
        });
        return {
          status: httpStatus.SUCCESS,
          samples: sample,
          consolidated: sample.length
        };
      } else {
        throw new SampleException(httpStatus.BAD_REQUEST, 'The sample type is incorrect or not informed.');
      }

    } catch (err) {
      return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async deleteByCode(req) {
    try {
      const {
        code
      } = req.params;
      const result = await SampleRepository.delete({
        code
      });
      if (result == 0) throw new SampleException(httpStatus.NOT_ACCEPTABLE, 'Sample not deleted or no longer exists!');
      const test = {
        status: httpStatus.SUCCESS,
        deleted: `${result} data has been removed!`
      };
      return test;
    } catch (err) {
      return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }
}

export default new SampleService();