import SampleService from '../../sample/service/SampleService.js';
import assert from 'assert';

const MOCK_REQUEST_SAMPLE_WITH_CODE_AND_TYPE = {
  params: {
    code: 123456701,
    type: 'sangue'
  }
};
const MOCK_REQUEST_TO_CREATE_SAMPLE = {
  body: {
    type: 'sangue',
    code: 123456701,
    shelfLife: 1
  }
};
describe('Sample service test field', function () {
  it('Function creationService', async () => {
    const expected = ['date', 'valid', 'id', 'type', 'code', 'deadline_to_expire'];
    const {
      status,
      sample
    } = await SampleService.createSample(MOCK_REQUEST_TO_CREATE_SAMPLE);
    assert.deepStrictEqual(status, 201);
    assert.deepEqual(Object.keys(sample), expected);
  });
  it('Function findSamplesAll', async () => {
    const expected = ['samples', 'consolidated'];
    const {
      status,
      ...result
    } = await SampleService.findSamplesAll();
    assert.deepStrictEqual(status, 200);
    assert.deepEqual(Object.keys(result), expected);
  });
  it('Function findByCode', async () => {
    const expected = ['id', 'date', 'type', 'code', 'deadline_to_expire', 'valid'];
    const {
      status,
      ...result
    } = await SampleService.findByCode(MOCK_REQUEST_SAMPLE_WITH_CODE_AND_TYPE);
    assert.deepStrictEqual(status, 200);
    assert.deepEqual(Object.keys(result.sample), expected);
  });
  it('Function findByType', async () => {
    const expected = ['samples', 'consolidated'];
    const {
      status,
      ...result
    } = await SampleService.findByType(MOCK_REQUEST_SAMPLE_WITH_CODE_AND_TYPE);
    assert.deepStrictEqual(status, 200);
    assert.deepEqual(Object.keys(result), expected);
  });
  it('Function deleteByCode', async () => {
    const {
      status,
      deleted
    } = await SampleService.deleteByCode(MOCK_REQUEST_SAMPLE_WITH_CODE_AND_TYPE);
    assert.deepStrictEqual(status, 200);
    assert.deepEqual(deleted, '1 data has been removed!');
  });
});