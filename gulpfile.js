const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
const sourcemaps = require('gulp-sourcemaps');

//html
gulp.task("copy-html",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
	
});
gulp.task("img",function(){
	gulp.src("img/**")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload());
	
});

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(cleanCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
	
});

//js
gulp.task("script",function(){
	gulp.src(["js/**"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})


gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	})
});

gulp.task("watch",function(){
	gulp.watch("index.html",["copy-html"])
	gulp.watch("html/*.html",["html"])
	gulp.watch("img/**",["img"])
	gulp.watch("sass/*.scss",["sass"])
	gulp.watch(["js/**"],["script"])
});
/*gulp.task("es5",function(){
	gulp.src("js/*.js")
	.pipe(babel({"presets":["es2015"]}))
	
	.pipe(gulp.dest("dist/js"))
	
	.pipe(connect.reload());
});*/
gulp.task("default",["server","watch"]);
