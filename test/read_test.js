const assert = require('assert'); //checks if condition is true
const User = require('../src/models/user');

describe('Reading in the database', () =>{
  // we create a record and wait for it
  // to be created with done callback

  beforeEach((done) => {
    joe = new User({ name: 'joefaee'});
    joe.save()
      .then(() => {
        done();
      });
  });

  // find one specific user
  it('searches a user', (done) => {
    User.find({name: "joefaee"})
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        console.log(users);
        done();
      }); //instance of a User
  });

  // find one specific user
  it('search for a particular user', (done) =>{
    User.findOne({_id: joe._id})
      .then((user) => {
        assert(user.name === joe.name);
        done();
      });
  });
});
