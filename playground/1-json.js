const fs = require('fs');
const { json } = require('stream/consumers');

// const book = {
//     title: 'magic treehouse',
//     author: 'Jerry'
// }

// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // const parseData = JSON.parse(bookJSON)
// // console.log(parseData.author);

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson)

// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer);
const dataJson = dataBuffer.toString();
console.log(dataJson)
const data = JSON.parse(dataJson);

data.name = 'Jerry';
data.age = 19;

const infoJSON = JSON.stringify(data);

const changeInfo = fs.writeFileSync('1-json.json', infoJSON)

console.log(infoJSON);






