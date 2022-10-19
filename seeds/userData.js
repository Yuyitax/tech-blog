const {User} = require('../models')


const users = 
[
  {
    "username": "Cris",
    "password": "p12345"
  },
  {
    "username": "Lernantino",
    "password": "password12345"
  }
];

const seedUser = () => User.bulkCreate(users, {
  individualHooks: true,
  returning: true
});

module.exports = seedUser

