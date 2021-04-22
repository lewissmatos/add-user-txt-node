const argv = require('yargs')
            .option('n', {
                alias: 'nombre',
                type: 'string',
                //emandOption: true,
                describe: 'Nombre del usuariio'
            })
            .option('a', {
                alias: 'apellido',
                type: 'string',
               // emandOption: true,
                describe: 'Apellido del usuariio'
            })
            
            .option('e', {
                alias: 'edad',
                type: 'number',
                //emandOption: true,
                describe: 'Edad del usuariio'
            }).argv;

module.exports = argv;
