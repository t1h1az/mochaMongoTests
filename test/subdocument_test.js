const assert = require('assert');
const User = require('../src/models/user');

describe('subdocuments',() => {
  it('can create a subdocument', (done) => {
    // new test user is created in database
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'posttitle'}]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.posts[0].title === 'posttitle');
      });
    done();
  });

  it('can update subdocuments to in an array', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{title: 'posttitle'}],
    });

    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        user.posts.push({title: 'newtitle' });
        return user.save();
      })
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        assert(user.posts[1].title === 'newtitle');
      });

      done();

    it('can remove an existing subdocument', (done) => {
      const joe = new User({
        name: 'Joe',
        posts: [{ title: 'blogpost'}]
      });

      joe.save()
        .then(() => User.findOne({name: 'Joe'}))
        .then((user) => {
          // problem with slice and splice ... vanila js is pain
          // mongoose offers alternate api
          const post = user.posts[0];
          post.remove();
          return user.save();
          //dont write
        })
        .then(() => User.findOne({name: 'Joe'}))
        .then((user) => {
          assert(user.post.lenght === 0);
        });
      done();

    });


  });
});
