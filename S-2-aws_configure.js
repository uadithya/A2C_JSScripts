const fs = require('fs');
const  Client  = require('ssh2').Client;
const e = require('./S-2A-accesskey');
const f = require('./S-2B-secretkey');
const g = require('./S-2C-region');
const h = require('./S-2D-outputformat');

var acckey = e.acck();
var secretkey = f.sec();
var region= g.loc();
var outform = h.out();


function step_one(a,b,c,d) {
  const conn = new Client();
  conn.on('ready', () => {
    console.log('Client :: ready');
    conn.shell((err, stream) => {
      if (err) throw err;
      stream.on('close', () => {
        console.log('Stream :: close');
        conn.end();
      }).on('data', (data) => {
        console.log('OUTPUT: ' + data);
      });
      stream.end(`sudo su -\naws configure\n${a}\n${b}\n${c}\n${d}\nexit\n`);
      //stream.end('cd aws\nls -l\nexit');
    });
  }).connect({
    host: '3.90.160.245',
    port: 22,
    username: 'ec2-user',
    privateKey: fs.readFileSync('javascript.pem')
  });
}

step_one(acckey,secretkey,region,outform);
