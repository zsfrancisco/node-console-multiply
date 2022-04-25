const {createFile} = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

createFile(argv.b, argv.l, argv.e)
    .then(filename => console.log(`${filename} has been created`.green))
    .catch(console.error);
