const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');
console.log(argv);
var commando = argv._[0];
switch (commando) {
    case 'crear':
        let hacer = porHacer.crear(argv.description);
        console.log(hacer);
        break;
    case 'listar':
        let listar = porHacer.getListado();
        for (let lista of listar) {
            console.log("====Por hacer===== ".yellow);
            console.log(lista.description);
            console.log(lista.completado);


        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}