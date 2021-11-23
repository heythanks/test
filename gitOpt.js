//对git进行操作的辅助文件
const { execSync } = require('child_process');
const process = require('process');
const pushCodeHandle = (m) => {



}
//一套消息机制，让子进程按照指令处理git
//一套消息机制，让子进程按照指令处理git
process.on('message', function (m) {
  // const m = {
  //   type: 'PUSH CODE',
  //   config: {
  //     msg: ''
  //   }
  // };
  execSync('git add .');
  execSync(`git commit -m ${m.config.msg}`);
  execSync('git push origin master');

});
process.on('uncaughtException', (err, origin) => {
  console.log(err, origin, 'err')
});