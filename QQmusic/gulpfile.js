var gulp = require("gulp");
var htmlClean = require("gulp-htmlclean");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var debug = require("gulp-strip-debug");
// 将less转换成css
var less = require("gulp-less");
var cleanCss = require("gulp-clean-css");

// 属性前缀
var postcss = require("gulp-postcss");
var autoprofixer = require("autoprefixer");

// 开启服务器
var connect = require("gulp-connect");



var folder = {
    src: "src/",
    dist: "dist/"
}
// 判断当前环境变量
var devMod = process.env.NODE_ENV == "development";

// export NODE_ENV=development  设置环境变量
// var devMod = process.env.NODE_ENV == "production";


gulp.task("html", function () {
    var page = gulp.src(folder.src + "html/*")
        .pipe(connect.reload())
    if (!devMod) {
        page.pipe(htmlClean())

    }
    page.pipe(gulp.dest(folder.dist + "html/"))
})

gulp.task("css", function () {
   var page =  gulp.src(folder.src + "css/*")
        .pipe(connect.reload())
        .pipe(less())
        .pipe(postcss([autoprofixer()]))
        if(!devMod){
            page.pipe(cleanCss())

        }
        page.pipe(gulp.dest(folder.dist + "css/"))
})


gulp.task("images", function () {
    gulp.src(folder.src + "images/*")
        .pipe(imagemin())
        .pipe(gulp.dest(folder.dist + "images/"))
})
gulp.task("js", function () {
    var page = gulp.src(folder.src + "js/*")
        .pipe(connect.reload())
        if(!devMod){
            page.pipe(debug())
            page.pipe(uglify())
        }
        
        page.pipe(gulp.dest(folder.dist + "js/"))
})

gulp.task("server", function () {
    connect.server({
        port: "8888",
        livereload: true
    })
})

gulp.task("watch", function () {
    gulp.watch(folder.src + "html/*", ["html"]);
    gulp.watch(folder.src + "css/*", ["css"]);
    gulp.watch(folder.src + "js/*", ["js"]);
    gulp.watch(folder.src + "images/*", ["images"]);



})

gulp.task("default", ["html", "css", "js", "images", "server", "watch"]);