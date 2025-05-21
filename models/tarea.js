
const {v4:idv4 } = require('uuid');

class Tarea {
    id='';
    desc='';
    completadoEn='';
    constructor(desc){
        this.id= idv4();
        this.desc = desc;
        this.completadoEn= null;
    }
}

module.exports= Tarea;
