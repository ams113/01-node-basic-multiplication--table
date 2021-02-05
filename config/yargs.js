
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    desc: 'Base of multiplication table'
                })
                .option('l', {
                    alias: 'limit',
                    type: 'number',
                    default: 10,
                    desc: 'Number of rows in the table'
                })
                .option('s', {
                    alias: 'show',
                    type: 'boolean',
                    default: false,
                    desc: 'Show table on cmd'
                })
                
                .check( ( argv, options ) => {
                    if( isNaN( argv.b ) ) {
                        throw 'Argument error not is a number';
                    }
                    return true;
                })
                .argv;

module.exports = argv;