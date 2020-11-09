const jdown = require('jdown');
const marked = require('marked');


const renderer = new marked.Renderer();

jdown('content/products', {
  fileInfo: true,
  markdown: {renderer},
  assets: {output: './static/json/content.json'}
}).then(content => console.log(content));
