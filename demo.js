#!/usr/bin/env node
let fs = require('fs');
let dirName = process.argv[2];
fs.mkdirSync("" + dirName);
fs.appendFileSync(dirName + '/index.html','<!DOCTYPE><title>Hello</title><h1>Hi</h1>')
fs.mkdirSync(dirName + "/css");
fs.mkdirSync(dirName + "/js");
fs.appendFileSync(dirName + "/css/style.css","h1{color: red;}")
fs.appendFileSync(dirName + "/js/main.js","var string = 'Hello World';alert(string)");
console.log('恭喜您，创建成功！')
process.exit(0)
