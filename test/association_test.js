const mongoose = require('mongoose');
const BlogPost = require('../src/models/blogpost');
const Comment = require('../src/models/comment');
const User = require('../src/models/user');
const assert = require('assert');

describe('Association Test', (done) => {
  let joe, comment, blogPost;

  beforeEach((done) => {
    joe = new User({name: 'Joe'});
    blogPost = new BlogPost({
      title: 'Islands you must visit',
      content: 'we start our search for the most beautiful island in...'
    });
    comment = new Comment({content: 'I have never been to a beautiful beach like this.'});

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.author = joe;

    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => done());
  });

  it('saves a relation between an user and a blogpost', (done) => {
    User.findOne({name: 'Joe'})
      .populate('blogPosts')
      .then((user) => {
        assert(user.blogPosts[0].title === 'Islands you must visit');
        console.log(user);
        done();
      });
  });
});
