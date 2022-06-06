const fs = require('fs');
const  Client  = require('ssh2').Client;


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
      stream.end('curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \nunzip awscliv2.zip\nsudo ./aws/install \naws --version\n exit\n');
      
    });
  }).connect({
    host: '3.90.160.245',
    port: 22,
    username: 'ec2-user',
    privateKey: fs.readFileSync('javascript.pem')
  });

