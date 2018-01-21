const gulp = require('gulp');
const markdownToJSON = require('gulp-markdown-to-json');
const concat_json = require("gulp-combine-json");
const prettyData = require('gulp-pretty-data');
const modifyFile = require('gulp-modify-file')
const marked = require('marked');

marked.setOptions({
    pedantic: true,
    smartypants: true
});

gulp.task('md2json', () => {
    gulp.src('_posts/**/*.md')
        .pipe(markdownToJSON(marked))
        .pipe(gulp.dest('_data'))
        .pipe(modifyFile((content, path, file) => {
            const start = '['
            const end = ']'
            return `${start}${content}${end}`
        }))
        .pipe(concat_json("_posts.json"))

    .pipe(modifyFile((content, path, file) => {
            const start = '{ "posts":'
            const end = '}'
            return `${start}${content}${end}`
        }))
        .pipe(prettyData({
            type: 'prettify'
        }))
        .pipe(gulp.dest('_data'))
});
