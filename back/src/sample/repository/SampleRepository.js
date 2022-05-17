import Sample from '../model/Sample.js';

class SampleRepository {
  async create(type, code, deadline_to_expire) {
    try {
      return await Sample.create({
        type,
        code,
        deadline_to_expire
      });
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  async findOne(where) {
    try {
      return Sample.findOne({
        where
      });

    } catch (err) {
      console.error(err.message);
      return null;
    }
  }
  async findAll(where = {}) {
    try {
      return await Sample.findAll({
        where
      });
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  async update(item, where) {
    try {
      return await Sample.update(item, {
        where
      });
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }
  async delete(where) {
    try {
      return await Sample.destroy({
        where: where
      });
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}

export default new SampleRepository();