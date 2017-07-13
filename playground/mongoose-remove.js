const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/User');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove();

Todo.findByIdAndRemove('5967d42df8654ba0f0fb5bc4').then((todo) => {
  console.log(todo);
});