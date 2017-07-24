const assert = require('assert'); //checks if condition is true
const User = require('../src/models/user');

describe('Creating records', () =>{
  it('saves a user', (done) =>{
    const joe = new User({
      name: 'Joe'
    });
    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
    });
  });
});
