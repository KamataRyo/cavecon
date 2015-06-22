
var gulp = require('gulp');
//var exec = require('child_process').exec;
var mocha = require('gulp-mocha');

// gulp.task('exec', function (cb) {
//   exec('node index.js', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// })

gulp.task('mocha',function(){
	return gulp.src(['test/testOf.graph.js'], {read : false})
		.pipe(mocha({reporter : 'nyan'}))
});

gulp.task('default',function(){
	gulp.watch(['./js/*','./test/*'],['mocha']);
});