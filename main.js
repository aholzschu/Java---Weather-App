

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city')
var description = document.querySelector('.description')
var temperature = document.querySelector('.temperature')
var max = document.querySelector('.max')
var min = document.querySelector('.min')
var humidity = document.querySelector('.humidity')
var precipitation = document.querySelector('.precipitation')


button.addEventListener('click',function(){

fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=2d974ece82ac833100362d958b4baece')
.then(response => response.json())

.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var maxValue = data['main']['temp_max'];
    var minValue = data['main']['temp_min'];
    var humValue = 'Humidity: '+ data['main']['humidity'] + '%';
    var preValue = 'Precipitation: '+ data['main']['precipitation'] + '%';





    var newtempValue = 1.8*(tempValue-273) + 32;
    var newmaxValue = 1.8*(maxValue-273) + 32; 
    var newminValue = 1.8*(minValue-273) + 32;

    var finaltempValue = Math.round(newtempValue) + '\u00B0F';
    var finalmaxValue = 'High: ' + Math.round(newmaxValue) + '\u00B0F';
    var finalminValue = 'Low: ' + Math.round(newminValue) + '\u00B0F';


    city.innerHTML=nameValue;
    temperature.innerHTML=finaltempValue;
    description.innerHTML=descValue;
    max.innerHTML=finalmaxValue;
    min.innerHTML=finalminValue;
    humidity.innerHTML=humValue;
})

.catch(err => alert ("Please enter a valid city"))
})

