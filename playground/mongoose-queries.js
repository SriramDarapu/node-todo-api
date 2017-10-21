var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/Todo');
var {User} = require('./../server/models/User');

var id = '59eb2aba9e6a621ec094c8b5';

// Todo.findById(id).then(
//     (todo) => {
//         if(!todo) {
//             return console.log('ID not found');
//         }
//         console.log('Todo', todo);
//     }
// ).catch((e) => {
//     console.log(e);
// });

User.findById(id).then(
    (user) => {
        if(!user) {
            return console.log('ID not found');
        }
        console.log('User', user);
    }
).catch(
    (e) => console.log(e)
)