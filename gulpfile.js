var gulp = require('gulp');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');

gulp.task('mocha',function(){
	return gulp.src([
			'test/testOf.graph.js',
			'test/testOf.search.js',
			'test/testOf.cave.js',
			'test/testOf.cvMath.js'
		],
		 {read : false})
		//.pipe(plumber()
		.pipe(mocha({reporter : 'Nyan'}).on('error', function(err) {
      		notifier.notify({
        		message: err.message,
        		title: 'mocha plugin error',
        		sound: 'Glass'
      		});
    }));

});

gulp.task('default',['mocha'],function(){
	gulp.watch(['./js/*','./test/*'],['mocha'])
});