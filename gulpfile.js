
var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('exec', function (cb) {
  exec('node index.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('default',function(){
	gulp.watch('./index.js',['exec']);
});