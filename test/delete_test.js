const assert = require('assert'); //checks if condition is true
const User = require('../src/models/user');

describe('Creating records', () =>{

  let joe; // Why do we do that here?

  beforeEach((done) => {
    joe = new User({ name: 'joefaee'});
    joe.save()
      .then(() => {
        done();
      });
  });
  // We have 4 possible removings 3 are class or collection based
  // you can only remove, findOneAndRemove, findByIdAndRemove
  // a fourth delete operation is instance based and only deletes an instance

  it('model instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'joefaee'}))
      .then((user) => {
        assert(user === null);
        done();
    });//instance of a User
  });


  it('class method findOneAndRemove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'joefaee'}))
      .then((user) => {
        assert(user === null);
        done();
    });//instance of a User
  });

  it('class method findByIdAndRemove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'joefaee'}))
      .then((user) => {
        assert(user === null);
        done();
    });//instance of a User
  });
});
