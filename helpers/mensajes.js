require('colors');


const mostrarMenu = () =>{

    return new Promise ((resolve)=>{
        console.clear();
        console.log('========================'.green);
        console.log('selecione una opcion');
        console.log('========================'.green);
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tarea`);
        console.log(`${'3.'.green} Listsar tareas completas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} Salir \n`);

        const readline= require('readline')
        .createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('Selecione una opción: \n', (option)=>{
            readline.close();
            resolve(option);
        } );
    })

}

const pausa =()=>{
    return new Promise((resolve)=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question(`\n Presione ${'ENTER'.green} para continuar \n`,
            (entrada)=>{
                readline.close(entrada);
                resolve()
            }
        );
    })
}

module.exports = {
 mostrarMenu: mostrarMenu,
 pausa:pausa
}