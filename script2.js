

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
async function SearchCity(ciudad) {
   // pokemonName = (pokemonName).toLowerCase()// pone en minusculas el nombre
    //console.log(document.documentElement)
    const cardApp = document.querySelector(".card");
    const imageMaster = document.querySelector(".weather-icon");
    const tempCity = document.querySelector(".temp");
    //const city = document.querySelector(".city");
    const humedityCity = document.querySelector(".humidity");
    const windWCity = document.querySelector(".wind");
    const apiKey = 'd3c39f57206d5904890771c822ffaac3';
    console.log('ímprimir')
    try { 
        //se realiza el consumo de la API principal
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ciudad}&appid=${apikey}`);
        const temperature = response.data;
        console.log('temperatura' + temperature)

    } catch (error) {
        // Manejo de errores
        console.error("Error al buscar el pokemon:", error);   
        window.alert("Error al buscar la ciudad")  
    }
}
const button = document.querySelector(".search button");
button.addEventListener("click", SearchCity(city))

   /* button=document.querySelector(".search")
    button.addEventListener("click", SearchCity(city));*/
    /*const button = document.querySelector(".search button");
    async function nameFunction() {
        const city = document.querySelector("search");
        console.log('ímprimir'+ city)
        //element=toString.element
       
        //const element ="pikachu"
        //element=element.toLowerCase();
       
        SearchCity(city);
    }*/

