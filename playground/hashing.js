const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 5
};




let token = jwt.sign(data, 'saltitup');
let decoded = jwt.verify(token, 'saltitup');

console.log(token);
console.log(`Decoded: ${JSON.stringify(decoded)}`);
// let message = 'I am user number one.';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//   id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'saltitup').toString()
// }

// let resultHash = SHA256(JSON.stringify(token.data) + 'saltitup').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed.');
// } else {
//     console.log('Data was changed. Do not trust.');
// }

