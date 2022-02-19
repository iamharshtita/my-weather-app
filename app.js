'use strict';
searchButton.addEventListener('click', searchWeather);

function searchWeather(){
    var cityName=searchCity.value;
    if (cityName.trim().length==0){
        return alert('Please input the City Name');
    }
    loadingText.style.display='block';
    weatherBox.style.display='none';
   
    var http= new XMLHttpRequest();
    var apikey='c566352bfcaa937d72558a18644b6cfd';
    var url='http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=metric&appid=' + apikey;
    if(location.protocol=== 'http:'){
       url='http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=metric&appid=' + apikey;
    }
    else{
        url='https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=metric&appid=' + apikey;
    }
    
    var method='GET';

    http.open(method, url);

    http.onreadystatechange=function(){
        if(http.readyState==XMLHttpRequest.DONE && http.status===200){
            var data=JSON.parse(http.responseText);
            var weatherData= new weather(cityName.toUpperCase(), data.weather[0].description.toUpperCase());
            weatherData.temperature=data.main.temp;
            updateWeather(weatherData);
        }
        else if(http.readyState===XMLHttpRequest.DONE){
            console.log(http.status);
             alert('Something went wrong!');
        }
    };
    http.send();
}

function updateWeather(weatherData){
    weatherCity.textContent=weatherData.cityName;
    weatherDescription.textContent=weatherData.description;
    weatherTemperature.textContent=weatherData.temperature;

    loadingText.style.display='none';
    weatherBox.style.display='block';
}
