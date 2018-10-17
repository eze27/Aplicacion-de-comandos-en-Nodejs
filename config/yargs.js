 const argv = require('yargs')
     .command('crear', 'Crear un elemento por hacer', {
         description: {
             demand: true,
             alias: 'd',
             desc: 'Descripcion de la tarea por hacer'
         }
     })
     .command('actualizar', 'Actualiza el estado completado de una tarea', {
         description: {
             demand: true,
             alias: 'd',
             desc: 'Descripcion de la tarea por hacer'
         },
         completado: {
             default: true,
             alias: 'c',
             desc: 'Marca como completado o pendiente la tarea'
         }
     })
     .command('borrar', 'borrar el estado completado de una tarea', {
         description: {
             demand: true,
             alias: 'd',
             desc: 'Descripcion de la tarea por hacer'
         },
         completado: {
             default: true,
             alias: 'c',
             desc: 'Marca como eliminado '
         }
     })
     .help()
     .argv;

 module.exports = {
     argv
 }