# 📝 Tareas por Hacer - Aplicación de Consola Interactiva

Una aplicación de consola creada con Node.js que permite crear, listar, completar y eliminar tareas. Ideal para practicar lógica de programación, manejo de entradas del usuario e interacción con archivos en consola.

## 🚀 Funcionalidades

- ✅ Crear nuevas tareas.
- 📋 Listar todas las tareas.
- 🔍 Ver tareas completadas o pendientes.
- ☑️ Marcar tareas como completadas o pendientes.
- ❌ Borrar tareas existentes.
- 💾 Guardado automático en un archivo JSON para mantener persistencia.

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/joseph19993d/Tareas-por-hacer.git
```

2. Ingresa al directorio del proyecto:

```bash
cd Tareas-por-hacer
```

3. Instala las dependencias:

```bash
npm install
```

---

## ▶️ Uso

Ejecuta el proyecto con:

```bash
node app.js
```

Verás un menú interactivo en la consola donde podrás:

- Crear nuevas tareas
- Ver tareas completas y pendientes
- Marcar varias tareas como completadas o pendientes
- Eliminar tareas con confirmación

---

## 🛠️ Estructura del Proyecto

```
Tareas-por-hacer/
│
├── helpers/
│   ├── guardarArchivo.js     // Guardado y lectura de tareas en archivo
│   └── inquirer.js           // Menús y entradas del usuario usando Inquirer
│
├── models/
│   ├── tarea.js              // Modelo individual de Tarea
│   └── tareas.js             // Clase para manejar múltiples tareas
│
├── db/
│   └── data.json             // Archivo de almacenamiento de tareas
│
├── app.js                    // Archivo principal de la aplicación
├── package.json              // Dependencias y metadatos del proyecto
```

---

## 📦 Dependencias

- [inquirer](https://www.npmjs.com/package/inquirer) – Para crear el menú interactivo.
- [colors](https://www.npmjs.com/package/colors) – Para darle color a los mensajes de consola.
- [uuid](https://www.npmjs.com/package/uuid) – Para generar IDs únicos para las tareas.

---

## 📸 Captura de Pantalla

![image](https://github.com/user-attachments/assets/c0fc2e2b-f598-4b4f-95bd-015689f05143)


```

---

## 👨‍💻 Autor

- **Joseph Rodelo**  
  GitHub: [@joseph19993d](https://github.com/joseph19993d)
  
---

## 📄 Licencia

Este proyecto está licenciado bajo la IMC.
