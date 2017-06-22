const assert = require('assert'); //checks if condition is true
const User = require('../src/models/user');

describe('Updating database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({name: 'joe'});
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Sue');
        done();
      });
  }

  it('model instance set n save', (done) => {
    joe.set('name', 'Sue');
    assertName(joe.save(), done);
  });


  it('model instance update', (done) => {
    assertName(joe.update({ name: 'Sue' }), done);
  });

  it('xa modal class can update', (done) => {
    assertName(
      User.update({name: 'joe'}, {name : 'Sue'}),
      done
    );
  });

  it(' a modal class can find one and update', (done) => {
    assertName(
      User.findOneAndUpdate({name: 'joe'}, {name : 'Sue'}),
      done
    );
  });

  it(' a modal class can find one by id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, {name : 'Sue'}),
      done
    );
  });
});
