const args = [ process.argv[2],process.argv[3] ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
const spawn = require('child_process').spawn;
const child = spawn('npm',args, opts);

child.on('error', function(err) {
  console.log(err);
});