
const argv = require('yargs')
                .command('crear', 'Crear un elemnto por hacer',{
                    descripcion:{
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea por hacer'
                    }
                })
                .command('actualizar', 'Actualiza el estado completo de una tarea',{
                    descripcion:{
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea por hacer'

                    },
                    completado: {
                        default: true,
                        alias: 'c',
                        desc: 'Marca como completado o pendiente la tarea'
                    }
                })
                .command('listar', 'Trae el listado completo con su estado',{
                    descripcion:{
                        desc: 'Descripción de la tarea por hacer',
                        estado: 'Asigna estado'
                    }
                })
                .command('borrar', 'Elimina un elemento de las tareas',{
                    descripcion:{
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea por hacer',
                    }
                })
                .help()
                .argv;


module.exports = {
    argv
}