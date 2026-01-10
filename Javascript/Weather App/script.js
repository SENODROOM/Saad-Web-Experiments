const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");

const weatherInfo = document.getElementById("weather-info");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

// Fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

// Display weather data
async function showWeather(city) {
  if (!city) return;

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  weatherInfo.classList.remove("hidden");

  weatherIcon.src = data.weather?.[0]?.icon || "";
  weatherIcon.alt = data.weather?.[0]?.description || "N/A";
  mainTemperature.textContent = data.main?.temp ?? "N/A";
  feelsLike.textContent = data.main?.feels_like ?? "N/A";
  humidity.textContent = data.main?.humidity ?? "N/A";
  wind.textContent = data.wind?.speed ?? "N/A";
  windGust.textContent = data.wind?.gust ?? "N/A";
  weatherMain.textContent = data.weather?.[0]?.main ?? "N/A";
  locationEl.textContent = data.name ?? "N/A";
}

// Event listener
getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  showWeather(selectedCity);
});
