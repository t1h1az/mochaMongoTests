const assert = require('assert'); //checks if condition is true
const User = require('../src/models/user');

describe('Updating database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({name: 'Joe', postCount: 0});
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

  it('a model class can update', (done) => {
    assertName(
      User.update({name: 'Joe'}, {name : 'Sue'}),
      done
    );
  });

  it(' a model class can find one and update', (done) => {
    assertName(
      User.findOneAndUpdate({name: 'Joe'}, {name : 'Sue'}),
      done
    );
  });

  it(' a model class can find one by id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, {name : 'Sue'}),
      done
    );
  });

  it('a users postCount will be updated', (done) => {
    User.update({ name: 'Joe' }, { $inc: { postCount: 1 }})
     .then(() => User.findOne({name: 'Joe'}))
     .then((user) => {
       assert(user.postCount === 1);
       done();
     });
  });
});
