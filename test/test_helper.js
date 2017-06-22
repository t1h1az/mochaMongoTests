const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// befire runs only one time before your entire test runs.
// in contrary beforeEach runs with every test
// we only need ti connect to mongo once
//
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('warning', error);
    });
});



beforeEach((done) =>{
  mongoose.connection.collections.users.drop(() =>{
    done();
  });
});
