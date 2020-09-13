const fs = require('fs');
const colors = require('colors');
const { argv } = require('process');


let listadoPorHacer=[];

const guardarDB = () => {
        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile('db/data.json', data,(err) => {
            if(err) throw new Error ('No se pudo grabar', err);
        });
}


const getListado = () => {
    let listado = require('../db/data.json');
    return listado;
}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
}


const cargarDB = () => {

    try{
        listadoPorHacer = require('../db/data.json');
    }catch{
        listadoPorHacer = [];
    }
    

}

const crear = (descripcion)=> {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    
    return porHacer;
}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if(index >= 0)
    {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}