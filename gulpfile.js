import gulp from 'gulp'
import zip from 'gulp-zip'
import del from 'del'

gulp.task('clean', function(done) {
    return del([
        'manifest/**/*'
    ], done);
});

gulp.task('generate-manifest', function(done) {
    gulp.src(['src/static/images/contoso*', 'src/manifest.json'])
        .pipe(zip('helloworldapp.zip'))
        .pipe(gulp.dest('manifest'), done);
    done();
});

gulp.task('default', gulp.series('clean', 'generate-manifest'), function(done) {
    console.log('Build completed. Output in manifest folder');
    done();
});

