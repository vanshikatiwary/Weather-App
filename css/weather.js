var selectElement = document.querySelector('#citySelect');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "ad4080fad612c870b1e44a298256da4f";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    var selectedCity = selectElement.value;
    if (!selectedCity) {
        alert('Please select a city.');
        return;
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert('An error occurred. Please try again later.'));
});
