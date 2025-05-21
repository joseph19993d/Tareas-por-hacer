require('colors');
const {inquirerMenu, pausa, validateInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas'); 
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');

const main = async() =>{
    let opt='';
    const tareas = new Tareas();

    const tareasDB = leerDB(); 

    if(tareasDB){
        // Establecer las tareas
    }

    do{
        opt = await inquirerMenu();
        switch(opt){
            case '1':
                const desc = await validateInput('Descripcion:');
                tareas.crearTarea(desc);
            break;
            case '2':
                //listado de tareas
                console.log(tareas.listadoArr);
            break;
        }
        
        guardarDB(tareas.listadoArr);
        await pausa();
    }while(opt != '0')

}

main();