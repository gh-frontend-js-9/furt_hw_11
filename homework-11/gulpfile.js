var gulp = require("gulp"),
    sass = require("gulp-sass");
    // browserSync = require('browser-sync');

gulp.task('scss', function(){
    return gulp.src('src/assets/styles/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))  //преобразование
        .pipe(gulp.dest('src/assets/styles/css'))
        // .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch',function(){
    gulp.watch('src/assets/styles/scss/**/*.scss', gulp.parallel('scss'))
    // gulp.watch('src/**/*.html', gulp.parallel('html'))
});


// gulp.task('html', function(){
//     return gulp.src('src/**/*.html')
//         .pipe(browserSync.reload({stream:true}))
// });
//

//
// gulp.task('browser-sync',function(){
//     browserSync.init({
//         server: {
//             baseDir: 'src/'
//         }
//     });
// });
//
// gulp.task('default', gulp.parallel('browser-sync', 'watch'))





