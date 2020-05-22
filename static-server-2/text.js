const fs = require('fs')

//读数据库
const usersSting = fs.readFileSync('./db/users.json').toString()
//变成数组
const UsersArray = JSON.parse(usersSting)
console.log(usersSting);


//写数据库
const user3 = { id: 3, name: 'tom', password: 'yyy' }
UsersArray.push(user3)
//将UsersArray变成字符串  因为文件只能存储字符串
const string = JSON.stringify(UsersArray)
fs.writeFileSync('./db/users.json', string)
