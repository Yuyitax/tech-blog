const {Post} = require('../models')


const posts =
[
  {
    "post_title": "Music Near Me",
    "post_body": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "user_id": 1
  },
  {
    "post_title": "Music Near Me",
    "post_body": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "user_id": 2
  },
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost
