import { getFlagUrl, getWeather } from "./api.js";
import cities from "./constant.js";
import { displayWeather, elements, hideError, hideLoader, showError, showLoader, updateThemeIcon } from "./ui.js";

const body=document.body

//Tema atributy
const savedTheme=localStorage.getItem("data-theme") || "light"

// Body'e tema atributini ekle
body.setAttribute("data-theme", savedTheme)

    //Theme butonuna tiklaninca chalishacak fonksiyon
elements.themeBtn.addEventListener("click", () => {
    //Mevcut temaya erish
    const currentTheme = body.getAttribute("data-theme")

    //Yeni temayi belirle
    const newTheme = currentTheme === "light" ? "dark" : "light"

    body.setAttribute("data-theme", newTheme)

    localStorage.setItem("data-theme", newTheme)

    //Iconu guncelle
    updateThemeIcon(newTheme)

})


document.addEventListener("DOMContentLoaded", () => {
    //Sayfa yuklendigi anda input isherisinde shehirler diziside yuklensin
    createOption(cities);
})

elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    //Formun icherisnde inputin degerine erish
    const query = e.target[0].value.trim();

    //Eger input bosh ise fonksiyonu durdur 
    if(!query) {
        alert('Lutfen shehir adi giriniz!!!');

        return;
    }

    showLoader();
    

    try {
        const weatherData = await getWeather(query);

        const flagUrl = getFlagUrl(weatherData.sys.country);

        displayWeather(weatherData, flagUrl);

        hideError();
    } catch (error) {
        showError();
        
    } finally{
        hideLoader();
        
    }  

});

const createOption = (cities) =>{
    //Disharidan verilen shehir dizisini don ve herbir dizi elemani ichin bir html'in datalist kisminda yani inputin icherisnde bir option olushtur
    cities.forEach((city) => {
        //Her shehir ichin bir option olushtur
       const option = document.createElement('option');

       //Optionlarin valuesini shehir adi olarak ayarla
       option.value=city;

       //Olushturulan optionlari html kismindaki data-list icherisine aktar
       elements.citiesDataList.appendChild(option);
       
    });
};


