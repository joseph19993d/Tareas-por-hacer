const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    // convertir el objeto a un array
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    // Agrega las tareas al listado
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, idx) => {
      const idxStr = `${idx + 1}.`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idxStr} ${desc} :: ${estado}`);
    });
  }

  listarPendiantesCompletadas(completadas = true) {
    let contador = 0;
    for (let i = 0; i < this.listadoArr.length; i++) {
      const tarea = this.listadoArr[i];
      const completada = !!tarea.completadoEn;

      if (completada === completadas) {
        contador++;
        console.log(
          `${contador.toString().green}. ${tarea.desc} :: ${
            completada ? "Completada".green : "Pendiente".red
          }`
        );
      }
    }
  }

  borrarTarea(id=''){
    if(this._listado[id]){
        delete this._listado[id];
    }
  }


}

module.exports = Tareas;
