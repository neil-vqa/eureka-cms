var jsonConcat = require("json-concat");

jsonConcat({
    src: './content/products',
    dest: './content/products/index.json'
}, function (json, err) {
    console.log(json);
     console.log(err);
});

