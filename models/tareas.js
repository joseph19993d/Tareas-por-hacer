const Tarea = require('./tarea')

class Tareas {

    _listado={};

    get listadoArr(){
        // convertir el objeto a un array 
        const listado = [];
        Object.keys(this._listado).forEach(key=>{
            listado.push(this._listado[key]);
        })
        return listado;
    }

    constructor(){
        this._listado={}
    }

    crearTarea(desc){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []){
        // Agrega las tareas al listado
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

}

module.exports = Tareas;