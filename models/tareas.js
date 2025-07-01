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

          `${contador.toString().green}. ${tarea.desc} :: ${completada ? "Completada".green : "Pendiente".red
          }`
        );
      }
    }
  }

  /**
   * Borra una tarea del listado por su ID
   * @param {string} id - ID de la tarea a borrar
   * @return {void}
   * * Si el ID no existe, no hace nada
   * * Si el ID existe, lo elimina del listado
   *  */
  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  /** 
  * Marcar como completadas las tareas con id en el arreglo,
  * Marcar como pendientes todas las tareas que no están en el arreglo
  * @param {Array} ids - Array de IDs de tareas a marcar como completadas
  */
  marcarCompletadasPendientes(ids = []) {
    // 1. Marcar como completadas las tareas con id en el arreglo
    ids.forEach((id) => {
      if (!this._listado[id].completadoEn) {
        this._listado[id].completadoEn = new Date().toISOString();
      }
    });

    // 2. Marcar como pendientes todas las tareas que no están en el arreglo
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }

}

module.exports = Tareas;