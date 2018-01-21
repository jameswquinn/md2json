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
gulp.src('./blog/**/*.md')
  .pipe(markdownToJSON(marked))
  .pipe(modifyFile((content, path, file) => {
      const start = '['
      const end = ']'
      return `${start}${content}${end}`
  }))
  .pipe(concat_json("project.json"))
  .pipe(prettyData({type: 'prettify'}))
  .pipe(gulp.dest('tmp'))
});