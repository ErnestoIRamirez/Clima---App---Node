const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&apikey=3be5e000ac32fa56d0b66dc37b24fcd2`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}