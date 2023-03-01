

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

    changewall(data.weather[0].main)
    function changewall(url){
        if( url=='Clear')
        document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__480.jpg')`;
        
        else if( url=='Clouds')
        document.body.style.backgroundImage= `url('https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579__340.jpg')`;
        
        else if( url=='Snow')
        document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2019/10/07/11/26/winter-landscape-4532412__340.jpg')`;
        
        else if( url=='Rain' || url == 'Drizzle')
        document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2018/05/31/13/13/rainy-day-3443977__480.jpg')`;

        else if( url=='Haze' ||  url =='Smoke' )
        document.body.style.backgroundImage=`url('https://external-preview.redd.it/uXph-aQl65LEMx6tzW_11oo3sUkJ5keWzhNx6VKuO_s.jpg?auto=webp&s=af33259ad0da522f2165033965cfd4dc99da07c1 ')`;
        
        else if( url=='Thunderstorm' || url == 'Squall' || url ==  'Tornado')
        document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2016/01/22/23/06/flash-1156822__340.jpg')`;
    
        else if(url=='Sand' || url == 'Dust' || url == 'Ash')
        document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2019/09/15/13/53/monument-valley-4478323_960_720.jpg')`;
    
        else if(url == 'Mist'  || url == 'Fog')
        document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2016/11/18/15/36/fir-trees-1835402__480.jpg')`;
        
    };



})

.catch(err => alert ("Please enter a valid city"))
})

