const key_api_tiempo = "c27d6882d7ee4c9b93d1623e685790a7";

function getTiempo() {    
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=40.748333&lon=-73.985278&lang=es&key=${key_api_tiempo}&days=1`)
    .then(respuesta => respuesta.json())
    .then(data => cargarTiempo(data))
    .catch(error => {
        console.log("Se muestran temperaturas por defecto", error);
        cargarTiempo({ city_name: "New York City", country_code: "US", data: [{max_temp: 20, min_temp: 10, temp: 15, pop: 0, weather: { description: "Cielo despejado" }}]});
    });
}

function cargarTiempo(contenido) {
    document.getElementById("tiempoMinTemp").innerHTML = `${contenido.data[0].min_temp} °C<span>Mínima</span>`;
    document.getElementById("tiempoTemp").innerHTML = `${contenido.data[0].temp} °C<span>Actual</span>`;
    document.getElementById("tiempoMaxTemp").innerHTML = `${contenido.data[0].max_temp} °C<span>Máxima</span>`;

    document.getElementById("tiempoPrec").innerHTML = `${contenido.data[0].pop} % precipitacion`;
    document.getElementById("tiempoInfo").innerHTML = contenido.data[0].weather.description;

    document.getElementById("tiempoCiudad").innerHTML = `${contenido.city_name}, ${contenido.country_code}`;
}

export default getTiempo;