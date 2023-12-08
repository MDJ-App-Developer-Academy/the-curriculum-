(function(){
    // Variables and Constants
    let coords;
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const baseIconURL = "https://openweathermap.org/img/w/";
    const API_Key = "d1af6e024ab09a5841c06d2f9a5aa1c4";
    const year = new Date().getFullYear();

    // Cached Element References
    const yearElement = document.getElementById("year");
    const weatherReportElement = document.getElementById("weather-report");
    const buttonElement = document.querySelector("button");
    const cityInputElement = document.querySelector("input");

    // Event Listeners
    buttonElement.addEventListener("click", getWeather);

    // Functions
    init();

    function init() {
        yearElement.textContent = year;
        getCurrentLocation()
        .then((position) => {
            coords = position.coords;
            getWeather();
        })
        .catch((err) => {
            alert('Please allow location access to use this app.');
        });
    }

    function getWeather(event) {
        let url = new URL(baseUrl);
        if(event) {
            let city = cityInputElement.value;
            if(!city) return alert('Please enter a city.');
            url.searchParams.set('q', city);
            cityInputElement.value = '';
        } else {
            url.searchParams.set('lat', coords.latitude);
            url.searchParams.set('lon', coords.longitude);
        }
        url.searchParams.set('appid', API_Key);
        url.searchParams.set('units', 'imperial');

        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            render(data);
        })
        .catch((err) => {
            alert('Something went wrong. Please try again.');
        });
    }

    function getCurrentLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    function render({weather: [weatherData], main, name}) {
        const iconURL = `${baseIconURL}${weatherData.icon}.png`;
        weatherReportElement.innerText = `It is currently ${Math.floor(main.temp)} degrees and ${weatherData.description} in ${name}`;
    }
})();