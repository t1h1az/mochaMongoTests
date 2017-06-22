const assert = require('assert'); //checks if condition is true
const User = require('../src/models/user');

describe('Updating database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({
      name: 'joe'
    });
    joe.save()
      .then(() => done());
  });

  it('model instance set n save', (done) => {
    joe.set('name', 'Sue');
    joe.save()
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Sue');
        done();
      });
  });

  it('model instance update', (done) => {
    joe.update({ name: 'Sue'})
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        done();
      });
  });

});
