const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// A post can have multiple comments
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// A user can create multiple posts
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// A user can create multiple comments
User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Comments belog to specific user 
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Comments belog to a post 
Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };
