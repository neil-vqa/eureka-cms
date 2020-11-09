var jsonConcat = require("json-concat");

jsonConcat({
    src: './content/products',
    dest: './content/products/index.js'
}, function (json, err) {
    console.log(json);
     console.log(err);
});

jsonConcat({
    src: './content/announcement',
    dest: './content/announcement/index.js'
}, function (json, err) {
    console.log(json);
     console.log(err);
});
