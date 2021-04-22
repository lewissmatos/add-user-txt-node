const argv = require('../00-my-app/yargs');
const createUser = require('../00-my-app/data');


createUser(argv.nombre, argv.apellido, argv.edad)
.then(ok => console.log(ok,'creado!'))
.catch(err => console.log(err));