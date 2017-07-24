const mongoose = require('mongoose');
const PostSchema = require('./post');
const BlogPost = require('./blogpost');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters'//gives information how this object should be validated
    },
    required: [true, 'Name is required'] //mongoose knows name is required
  },
  postCount: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogpost'
  }]
});


const User = mongoose.model('user', UserSchema);

module.exports = User;
