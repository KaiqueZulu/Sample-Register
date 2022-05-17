import SampleService from '../service/SampleService.js';

class SampleController {

  async createSample(req, res) {
    const sample = await SampleService.createSample(req);
    return res.status(sample.status).json(sample);
  }

  async findByCode(req, res) {
    const sample = await SampleService.findByCode(req);
    return res.status(sample.status).json(sample);
  }

  async findByType(req, res) {
    const sample = await SampleService.findByType(req);
    return res.status(sample.status).json(sample);
  }

  async findSamplesAll(req, res) {
    const sample = await SampleService.findSamplesAll();
    return res.status(sample.status).json(sample);
  }

  async deleteByCode(req, res) {
    const sample = await SampleService.deleteByCode(req);
    return res.json(sample);
  }
}

export default new SampleController();