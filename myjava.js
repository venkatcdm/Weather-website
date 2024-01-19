var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var min = document.querySelector('#min')
var max = document.querySelector('#max')
var wind = document.querySelector('#wind')

apik = "48227ee7ce2bd662acbe1a69e0308af3"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var min_t = data['main']['temp_min']
    var max_t = data['main']['temp_max']
    var wndspd = data['wind']['speed']
    city.innerHTML=`<span><u>Weather of ${nameval}</u></span>`

    temp.innerHTML = `<span>Temperature: ${ convertion(tempature)} °C</span>`
    min.innerHTML = `<span>Minimum Temperature: ${ convertion(min_t)} °C</span>`
    max.innerHTML = `<span>Maximum Temperature: ${ convertion(max_t)} °C</span>`
    description.innerHTML = `<span>Sky Conditions: ${descrip}</span>`
    wind.innerHTML = `<span>Wind Speed: ${wndspd} km/h</span>`

  })

  .catch(err => alert('You entered Wrong city name'))
})