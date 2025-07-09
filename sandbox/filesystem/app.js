const fs = require('fs');

fs.readdir('../filesystem', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
