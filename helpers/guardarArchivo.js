const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data)=>{
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () =>{
    const data = fs.readFileSync(archivo,{encoding:'utf-8'})
    return JSON.parse(data);
}

module.exports = {guardarDB, leerDB};