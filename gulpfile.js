const { src, dest } = require('gulp');
const ListStream = require('list-stream');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');

function markdown(cb) {
	src('content/**/*.md')
	.pipe(ListStream.obj())
	.pipe(markdownToJSON(marked))
	.pipe(dest('static/json'));
	cb();
}

exports.markdown = markdown;
