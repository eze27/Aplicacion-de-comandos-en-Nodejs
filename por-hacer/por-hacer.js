const fs = require('fs');
//array de actividades por hace
let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}
const cargaDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const getListado = () => {
    cargaDB();
    return listadoPorHacer;
}
const crear = (description) => {
    cargaDB();
    let porHacer = {
        description,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const actualizar = (description, completado = true) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === description;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (description) => {
    cargaDB();
    let nuevaLista = listadoPorHacer.filter(tareas => {
        return tareas.description !== description;
    })
    if (listadoPorHacer.length === nuevaLista.length) {
        return false;

    } else {
        listadoPorHacer = nuevaLista;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}