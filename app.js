require("colors");
const {
  inquirerMenu,
  pausa,
  validateInput,
  listadoTareasBorrar,
  confirmar,
  selecionDeTareas,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    // Establecer las tareas
    // tareas = tareasDB;
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await validateInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        //listado de tareas [ARRARY]
        console.log(tareas.listadoArr);

        break;
      case "3":
        tareas.listarPendiantesCompletadas(true);

        break;
      case "4":
        tareas.listarPendiantesCompletadas(false);
        break;
      case "5":
        const ids =  await selecionDeTareas(tareas.listadoArr);
        if (ids.length > 0) {
          tareas.marcarCompletadasPendientes(ids);
          console.log("Tareas completadas");
        } else {
          console.log("No se seleccionaron tareas");
        }

        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        const ok = await confirmar("¿estas seguro?");
        if (Boolean(ok)) {
          tareas.borrarTarea(id);
          console.log("Tarea borrada");
        } 
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt != "0");
};

main();
