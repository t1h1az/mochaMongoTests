const assert = require('assert');
const User = require('../src/models/user');

describe('Validating user records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });  //for future engineers
    const validationResult = user.validateSync(); // here could be a callback because
    const {message} = validationResult.errors.name;

    assert(message === 'Name is required');
  });

  it('requires a user name longer than 2 characters', () => {
    const user = new User({ name: 'Al' });  //for future engineers
    const validationResult = user.validateSync(); // here could be a callback because
    const {message} = validationResult.errors.name;

    assert(message === 'Name must be longer than 2 characters');
  });

  // what happens here? if I make the validation fail, the test is not failing
  it('disallowed invalid user records', (done) => {
    const user = new User({ name: 'al' });  //for future engineers
    user.save()
      .catch((validationResult) => {
        const {message} = validationResult.errors.name;

        assert(message === 'Name must be longer than 2 characters');
        done();
    });
  });
});
