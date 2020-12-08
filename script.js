$(document).ready(function() {
    //Api Key Variable
    var apiKey ="2c0cf685d2351c01e336bf6a72151b48";
    //Button Function
    $("#weatherButton").on("click", function(){
        var cityName = $("#city").val();
        console.log(cityName)
        weatherSearch(cityName);
        weatherForecast(cityName);
        $("#city").val("");
    });
    //Pre-Loaded Selections
    $("#pipelineHi").on("click", function(){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + 96712 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            //Variable for city searched response
            var title=$("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp=$("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel=$("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed=$("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp=$("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp=$("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    $("#superTubes").on("click", function(){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + -34.051 + "&lon=" +  24.919 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            //Variable for city searched response
            var title=$("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp=$("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel=$("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed=$("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp=$("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp=$("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    $("#teahuTah").on("click", function(){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + -15.000 + "&lon=" +  -140.000 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            //Variable for city searched response
            var title=$("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp=$("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel=$("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed=$("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp=$("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp=$("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    $("#uluKuta").on("click", function(){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + -8.500 + "&lon=" +  115.000 + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            //Variable for city searched response
            var title=$("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp=$("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel=$("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed=$("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp=$("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp=$("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
        })
    })
    
    //Weather Forecast Function
    function weatherForecast(city){
       console.log(city)
        console.log(`https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial`)
        //Ajax call to Get Forecast
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`,
            method: "GET"
        }).then(function(response){
            //Response of Ajax call
            console.log(response)
        })
    }

    //Weather Search Function
    function weatherSearch(city){
        //Ajax Call to Get Weather
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            //Response of Ajax call
            console.log(response)
            weatherForecast(response.name)
            uvIndex(response.coord.lat, response.coord.lon)
            //Variable for city searched response
            var title=$("<h3>").text(response.name);
            //Current Temp Variable
            var currentTemp=$("<p>").text("Current Temperature: " + response.main.temp);
            //Humidity Level Variable
            var humidityLevel=$("<p>").text("Humidity Level: " + response.main.humidity);
            //Wind Speed Variable
            var windSpeed=$("<p>").text("Wind Speed: " + response.wind.speed);
            //Low Temp Variable
            var lowTemp=$("<p>").text("Min Temperature: " + response.main.temp_min);
            //High Temp Variable
            var highTemp=$("<p>").text("Max Temperature: " + response.main.temp_max);
            //Where to put all variable responses
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
            
        })
    }
    //Function for UV Index
    function uvIndex(lat, lon){
        //Ajax call for Uv Index
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon + "&units=imperial",
            method: "GET"
        }).then(function(response){
            //Response for Ajax Call
            console.log(response)
            var uv=$("<p>").text("UV Index: "+ response.value);
            //Where to put response 
            $("#weather-current").append(uv);
        });
    }
});