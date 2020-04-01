const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=4db089d8b73d4274ee5fe4d3b3a8bcca';

window.addEventListener('change', throttle(getWeather, 100));

function getWeather() {

    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const current = data.main.temp;
            const span = document.querySelector('[data-temperature]');
            if (document.getElementById('celsius').checked) {
                const temperature = current - 273.15;
                return span.innerHTML = temperature.toFixed(1) + ' &degCelsius';

            } else if (document.getElementById('fahrenheit').checked) {
                const temperature = (current - 273.15) * 1.8 + 32;
                return span.innerHTML = temperature.toFixed(1) + ' &degFahrenheit';
            } else {
                return span.innerHTML = 'Please choose the display mode!'
            }
        })


}

function throttle(fct, time) {
    let timeout = null;
    function res(...args) {
        if(!timeout) {
            timeout = setTimeout(() => {
                fct(...args);
                timeout = null;
            }, time);
        }
    }

    return res;
}     

document.addEventListener('change', handleTempChange);

function handleTempChange(e) {
    if (e.target.name === 'temp') {
        console.log(e.target.value);
        localStorage.setItem('temperature', e.target.value);
        document.cookie = 'temperature=' + e.target.value;

    }
}



(function () {
    
    let temperature;

    if (localStorage) {
        temperature = localStorage.getItem('temperature');
    } else {
        temperature = document.cookie.split('=')[1]; 
    }

    if (temperature) {
        document.querySelector('#' + temperature).setAttribute('checked', true);

    }   
  
})();







