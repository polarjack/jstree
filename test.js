var jsonfile = require('jsonfile');
var file = 'elites.json';
var filenew = 'output.json'

jsonfile.readFile(file, function (err, obj) {
  console.log(obj)


})

return;


jsonfile.writeFile(filenew, readingdata, function (err) {
  console.error(err)
})

