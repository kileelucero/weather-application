$(document).ready(function () {
    const form = document.querySelector(".panel input");
    const apiKey = "2c0cf685d2351c01e336bf6a72151b48";
    const inputValue = input.value;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}`;
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`;
    const {
        main,
        name,
        sys,
        weather
    } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
    const li = document.createElement("li");
    const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}
    </div>
    <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
    </figure>`;
    msg.textContent = "";

    input.addEventListener("key", event => {
        event.preventDefault();
        const inputValue = input.value;
    });

    fetch(urlForecast)
        .then(response => response.json())
        .then(data => {
            // do stuff with the data
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city";
        });

    fetch(urlWeather)
        .then(response => response.json())
        .then(data => {
            // do stuff with the data
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city";
        });

    li.classList.add("city");
    li.innerHTML = markup;
    list.appendChild(li);
    form.reset();
    input.focus();




});