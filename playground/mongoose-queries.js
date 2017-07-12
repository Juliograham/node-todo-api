const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/User');

// let id = '59664fa70c777ab822c1b88e11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid.');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//   console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => {
//     console.log(e);
// });

let newId = '596598ad4e6c5e100eaa06b1';

User.findById(newId).then((user) => {
    if(!user) {
        console.log('User is not found.');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));