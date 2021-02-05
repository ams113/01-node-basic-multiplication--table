// requireds
const fs = require('fs');
const colors = require('colors');



const createFile = async(base = 2, show = false, limit = 10) => {

        try {
            let outputFile = '';
            let outputCmd = '';

            for (let i = 1; i <= limit; i++) {
                outputFile += `${ base } x ${ i } = ${ base * i } \n`;
                outputCmd += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i } \n`;
            }

            if ( show ) {
                console.log('=========================='.green);
                console.log('   Multiplication table'.green, colors.blue( base ));
                console.log('=========================='.green);
                console.log( outputCmd );
            }

            fs.writeFileSync(`output/table-${ base }-to-${ limit }.txt`, outputFile);
            return `table-${ base }-to-${ limit }.txt`;
            
        } catch (err) {
            throw err;
        }

};

module.exports = {
    createFile
};