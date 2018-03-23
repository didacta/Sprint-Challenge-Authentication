const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });

 
  if (!username || !password) {
    res.status(422).json({ message: 'Username and password required' })
  }
  newUser
    .save()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(422).json(err);
    })
};

module.exports = {
  createUser
};
