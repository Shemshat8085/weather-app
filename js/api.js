const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const apiKey = "a892bcbab018aca937153a9bf6372f6c";

//Kendisine disharidan verilen
const getFlagUrl = (countryCode) =>
    `https://flagcdn.com/w80/${countryCode.toLocaleLowerCase()}.png`;


const getWeather = async (city) => {
try {
    const response=await fetch(`${baseUrl}?q=${city}&units=metric&appid=${apiKey}&lang=tr`);

    const weatherData = await response.json();

    if(!response.ok){
        throw new Error("Aratilan shehir bulunamadi");
    }

    return weatherData;
} catch (error) {
    throw error;
}
}

export{getWeather, getFlagUrl};