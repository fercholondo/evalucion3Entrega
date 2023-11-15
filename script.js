const botonBuscarCiudad = document.querySelector(".search button");
const cardApp = document.querySelector(".weather");
const imageMaster = document.querySelector(".weather-icon");
const tempCity = document.querySelector(".temp");
const city = document.querySelector(".city");
const humedityCity = document.querySelector(".humidity");
const windCity = document.querySelector(".wind");
const apiKey = "d3c39f57206d5904890771c822ffaac3";
const ciudad = document.querySelector(".search input");
const messageError = document.querySelector(".error");

botonBuscarCiudad.addEventListener("click", async () => {
    try {
    messageError.style.display = "none";
    console.log(ciudad.value)
    // Realiza la solicitud a la API principal
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ciudad.value}&appid=${apiKey}`
    );

    console.log(response.data.cod);

    if (response.data.cod === 200) {

      const temperature = response.data["main"]["temp"];

      console.log("temperatura" + temperature);
      // Asigna los datos de la API a los elementos del DOM
      tempCity.innerHTML = `${(temperature)}°C`;
      city.innerHTML = response.data["name"];
      humedityCity.innerHTML = `${response.data["main"]["humidity"]}%`;
      windCity.innerHTML = `${response.data["wind"]["speed"]}km/h`;

      const conditionalClima = response.data.weather[0]["main"];
      if (conditionalClima === "Clouds") {
        imageMaster.src = "images/clouds.png";
      } else if (conditionalClima === "Clear") {
        imageMaster.src = "images/clear.png";
      } else if (conditionalClima === "Drizzle") {
        imageMaster.src = "images/drizzle.png";
      } else if (conditionalClima === "Humidity") {
        imageMaster.src = "images/humidity.png";
      } else if (conditionalClima === "Mist") {
        imageMaster.src = "images/mist.png";
      } else if (conditionalClima === "Rain") {
        imageMaster.src = "images/rain.png";
      } else if (conditionalClima === "Snow") {
        imageMaster.src = "images/snow.png";
      }

      cardApp.style.display = "block";
      
    } else {
      //console.log(response.data.cod);
      cardApp.style.display = "none";
      messageError.style.display = "block";
    }
  } catch (error) {
    cardApp.style.display = "none";
    messageError.style.display = "block";
  }
});
