var jsonConcat = require("json-concat");

jsonConcat({
    src: './content/announcement',
    dest: './content/announcement/index.json'
}, function (json, err) {
    console.log(json);
     console.log(err);
});
