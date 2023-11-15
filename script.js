const searchCityButton = document.querySelector(".search button");

searchCityButton.addEventListener("click", async () => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

   // pokemonName = (pokemonName).toLowerCase()// pone en minusculas el nombre
    //console.log(document.documentElement)
    const cardApp = document.querySelector(".card");
    const imageMaster = document.querySelector(".weather-icon");
    const tempCity = document.querySelector(".temp");
    const city = document.querySelector(".city");
    const humedityCity = document.querySelector(".humidity");
    const windWCity = document.querySelector(".wind");
    const apiKey = 'd3c39f57206d5904890771c822ffaac3';
    console.log('ímprimir'+ city)
    try { 
        //se realiza el consumo de la API principal
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`);
        const temperature = response.data;
        console.log('temperatura' + temperature)

    } catch (error) {
        // Manejo de errores
        //window.alert("Error al buscar la ciudad")  
    }
}

)
