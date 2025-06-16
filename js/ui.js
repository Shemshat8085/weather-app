const elements = {
    form: document.querySelector("form"),
    loader: document.querySelector("#loader"),
    errorMessage: document.querySelector("#error-message"),
    weatherContainer: document.querySelector("#weather-container"),
    location: document.querySelector("#location"),
    countryFlag: document.querySelector(".country-flag"),
    date: document.querySelector("#date"),
    temperature: document.querySelector("#temperature"),
    feelLike: document.querySelector("#feel-like"),
    weatherIcon: document.querySelector(".weather-icon img"),
    weatherDescription: document.querySelector("#weather-description"),
    windSpeed: document.querySelector("#wind-speed"),
    humidity: document.querySelector("#humidity"),
    pressure: document.querySelector("#pressure"),
    citiesDataList: document.querySelector("#turkish-cities"),
    themeBtn: document.querySelector("#theme-toggle-btn")
  };

  const showLoader = () => {
    elements.loader.style.display="flex";
    elements.weatherContainer.classList.add("hidden");
  };

  const hideLoader = () => {
    elements.loader.style.display="none";
  };

  const showError = () => {
    elements.errorMessage.classList.add("show");
  };

  const hideError = () =>{
    elements.errorMessage.classList.remove("show");
  }


  const displayWeather = (data, flagUrl) => {
    // Güncel tarih verisini elde et
    const date = new Date().toLocaleDateString("tr", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    });

    

    

    elements.location.textContent=`${data.name},${data.sys.country}`;

    elements.countryFlag.innerHTML = `<img src="${flagUrl}" alt="flag">`;

    elements.date.textContent = date;

    elements.temperature.textContent=Math.round(data.main.temp) + "°C";

    elements.feelLike.textContent= `Hissedilen: ${Math.round(data.main.feels_like)}°C`;

    elements.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    elements.weatherDescription.textContent=`${data.weather[0].description}`;

    elements.windSpeed.textContent=`${data.wind.speed} m/s`;

    elements.humidity.textContent=`${data.main.humidity}%`;

    elements.pressure.textContent=`${data.main.pressure} hPa`;

    elements.weatherContainer.classList.remove("hidden");
    };


    //Tema iconini guncelle
    const updateThemeIcon = (theme) => {
      const icon=elements.themeBtn.querySelector("i")

      //Eger tema koyu tema ise gunesh degilse ay ikonu olsun
      icon.className = theme == "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
      
    }

export {elements, displayWeather, showLoader, hideLoader, showError, hideError, updateThemeIcon,};