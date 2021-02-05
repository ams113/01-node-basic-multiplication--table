const argv = require('./config/yargs');
const { createFile } = require('./helpers/multiply');


console.clear();

createFile( argv.b, argv.s, argv.l)
    .then( file => console.log(file.rainbow, 'created') )
    .catch( err => console.log( err ) );

