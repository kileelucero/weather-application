$(document).ready(function () {
    $('#weather-current').hide();
    $('#weather-forecast').hide();
    $('#weather-sections').hide();

    //Api Key Variable
    var apiKey = "2c0cf685d2351c01e336bf6a72151b48";
    //Enter Key Function
    $('#city').keypress(function (event) {
        if (event.keyCode === 13) {
          $('#weatherButton').click();
        }
      });
      //Button Function
    $("#weatherButton").on("click", function () {
        $('#weather-current').show();
        $('#weather-forecast').show();
        $('#weather-sections').show();

        var cityName = $("#city").val();
        console.log(cityName)
        weatherSearch(cityName);
        weatherForecast(cityName);
        $("#city").val("");
    });
    //Pre-Loaded Selections
    $("#pipelineHi").on("click", function () {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + 96712 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            //Variable for city searched response
            var title = $("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp = $("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel = $("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp = $("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp = $("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    $("#superTubes").on("click", function () {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + -34.051 + "&lon=" + 24.919 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            //Variable for city searched response
            var title = $("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp = $("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel = $("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp = $("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp = $("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    $("#teahuTah").on("click", function () {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + -15.000 + "&lon=" + -140.000 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            //Variable for city searched response
            var title = $("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp = $("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel = $("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp = $("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp = $("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    $("#uluKuta").on("click", function () {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + -8.500 + "&lon=" + 115.000 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            //Variable for city searched response
            var title = $("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp = $("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel = $("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp = $("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp = $("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })

    //Weather Forecast Function
    function weatherForecast(city) {
        console.log(city)
        var weatherForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        //Ajax call to Get Forecast
        $.ajax({
            url: weatherForecast,
            method: "GET"
        }).then(function (response) {
            //Response of Ajax call
            console.log(response)
            console.log(weatherForecast);
            //Variables to display information
            var temp1 = response.list[0].main.temp;
            $('#temp1').text((((((temp1 - 273.15) * .0018) + 32)) + " ° F"));
            var humid1 = response.list[0].main.humidity;
            $('#humid1').text([humid1] + '%');
            var wind1 = response.list[0].wind.speed;
            $('#wind1').text(wind1);

            var temp2 = response.list[8].main.temp;
            $('#temp2').text((((((temp2 - 273.15) * .0018) + 32)) + " ° F"));
            var humid2 = response.list[8].main.humidity;
            $('#humid2').text([humid2] + '%');
            var wind2 = response.list[8].wind.speed;
            $('#wind2').text(wind2);

            var temp3 = response.list[16].main.temp;
            $('#temp3').text((((((temp3 - 273.15) * .0018) + 32)) + " ° F"));
            var humid3 = response.list[16].main.humidity;
            $('#humid3').text([humid3] + '%');
            var wind3 = response.list[16].wind.speed;
            $('#wind3').text(wind3);

            var temp4 = response.list[24].main.temp;
            $('#temp4').text((((((temp4 - 273.15) * .0018) + 32)) + " ° F"));
            var humid4 = response.list[24].main.humidity;
            $('#humid4').text([humid4] + '%');
            var wind4 = response.list[24].wind.speed;
            $('#wind4').text(wind4);

            var temp5 = response.list[32].main.temp;
            $('#temp5').text((((((temp5 - 273.15) * .0018) + 32)) + " ° F"));
            var humid5 = response.list[32].main.humidity;
            $('#humid5').text([humid5] + '%');
            var wind5 = response.list[32].wind.speed;
            $('#wind5').text(wind5);
            $("#weather-forecast").append(temp1, temp2, temp3, temp4, temp5, humid1, humid2, humid3, humid4, humid5, wind1, wind2, wind3, wind4, wind5);
        })
    }

    //Weather Search Function
    function weatherSearch(city) {
        //Ajax Call to Get Weather
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function (response) {
            //Response of Ajax call
            console.log(response)
            weatherForecast(response.name)
            uvIndex(response.coord.lat, response.coord.lon)
            //Variable for city searched response
            var title = $("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp = $("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel = $("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp = $("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp = $("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);

        })
    }
    //Function for UV Index
    function uvIndex(lat, lon) {
        //Ajax call for Uv Index
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon + "&units=imperial",
            method: "GET"
        }).then(function (response) {
            //Response for Ajax Call
            console.log(response)
            var uv = $("<p>").text("UV Index: " + response.value);
            //Where to put response 
            $("#weather-current").append(uv);
        });
    }
});