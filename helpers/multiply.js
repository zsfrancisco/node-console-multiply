const fs = require('fs');
const colors = require('colors');
const lodash = require('lodash');

const createFile = async (base = 5, list = false, end = 10) => {
    try {
        const filename = `Table of ${base}`;
        const numbers = lodash.range(1, end + 1);
        let output = '';
        let outputConsole = '';
        numbers.forEach(number => {
            output += `${base} * ${number} = ${5 * number} \n`;
            outputConsole += `${colors.blue(base.toString())} ${colors.red('*')} ${colors.blue(number.toString())} 
                              ${colors.red('=')} ${5 * number} \n`;
        });
        if (list) {
            console.log('======================'.green);
            console.log(filename.green.bgWhite);
            console.log('======================'.green);
            console.log(outputConsole);
        }
        fs.writeFileSync(`./tables-outputs/${filename}.txt`, output);
        return filename;
    } catch (e) {
        console.error(e.underline.red);
        throw e;
    }
}

module.exports = {
    createFile
}