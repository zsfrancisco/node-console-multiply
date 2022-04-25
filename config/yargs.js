const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: "number",
            demandOption: true,
            describe: 'It is the base to multiply'
        },
        'l': {
            alias: 'list',
            type: "boolean",
            default: false,
            describe: 'List the table of multiply'
        },
        'e': {
            alias: 'end',
            type: "number",
            default: 10,
            describe: 'Limit of the multiply'
        }
    })
    .check((argsToCheck, _) => {
        if (isNaN(argsToCheck.b)) {
            throw new Error('The base has to be a number');
        }
        if (isNaN(argsToCheck.e)) {
            throw new Error('The end or limit has to be a number');
        }
        return true;
    })
    .argv;

module.exports = argv;