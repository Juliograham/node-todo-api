const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'testone@test.com',
  password: 'testonepass',
  tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'testtwo@test.com',
  password: 'testtwopass',
  tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'Example one',
  _publisher: userOneId
  
}, {
  _id: new ObjectID(),
  text: 'Example two',
  completed: true,
  completedAt: 5000,
  _publisher: userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};