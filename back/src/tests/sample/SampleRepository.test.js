import {
  addMinutes
} from 'date-fns';
import SampleRepository from '../../sample/repository/SampleRepository.js';
import assert from 'assert';

const MOCK_SAMPLE_URINE = {
  type: 'urina',
  code: 123456780,
  deadline_to_expire: addMinutes(new Date(), 1)
};
const MOCK_SAMPLE_CREATE_BLOOD = {
  type: 'sangue',
  code: 123456781,
  deadline_to_expire: addMinutes(new Date(), 1)
};

describe('Sample repository test field - CRUD', function () {
  this.beforeAll(async () => {
    const {
      type,
      code,
      deadline_to_expire
    } = MOCK_SAMPLE_URINE;
    await SampleRepository.create(type, code, deadline_to_expire);
  });
  this.afterAll(async () => {
    await SampleRepository.delete({
      code: MOCK_SAMPLE_CREATE_BLOOD.code
    });
  });
  it('Create sample', async () => {
    const {
      type,
      code,
      deadline_to_expire
    } = MOCK_SAMPLE_CREATE_BLOOD;
    const sample = await SampleRepository.create(type, code, deadline_to_expire);
    assert.deepEqual(sample._options.isNewRecord, true);
  });
  it('Read all samples', async () => {
    const result = await SampleRepository.findAll();
    assert.ok(result.length > 0);
  });
  it('Read a sample', async () => {
    const {
      type,
      code
    } = await SampleRepository.findOne({
      code: MOCK_SAMPLE_URINE.code
    });
    const result = {
      type,
      code
    };
    const {
      deadline_to_expire,
      ...comparison
    } = MOCK_SAMPLE_URINE;
    assert.deepEqual(result, comparison);
  });
  it('Update sample with code', async () => {
    const [result] = await SampleRepository.update({
      valid: false
    }, {
      code: MOCK_SAMPLE_URINE.code
    });
    assert.deepStrictEqual(result, 1);
  });
  it('Delete sample with ID', async () => {
    const result = await SampleRepository.delete({
      code: MOCK_SAMPLE_URINE.code
    });
    assert.deepStrictEqual(result, 1);
  });

});