const fs = require('fs');


const createUser = async (nombre = 'Lewis', apellido = 'Matos', edad=19) => {
    
    try {
        let out = `Nombre: ${nombre} \n Apellido: ${apellido} \n Edad: ${edad}`;
        console.log('\n',out);
    
        fs.writeFileSync(`./salida/usuario-${nombre}.txt`, out);
            
        return (`\n Archivo creado exitosamente!, usuario: ${nombre} ${apellido} \n`);
        
    } catch (error) {
        
    }
}

module.exports = createUser;