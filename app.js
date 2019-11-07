const lugar = require("./lugar/lugar")
const clima = require("./clima/clima");

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp);
// });

// clima.getClima(40.750000, -74.000000)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temp}`;
    } catch (e) {
        return `No se puede determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })