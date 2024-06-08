const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('div.icon img')
const weather = new Forecast();

const updateUi = (data) =>{
    // const cityData = data.cityData
    // const weather = data.weather
    const {cityData,weather} = data
   
    details.innerHTML = `
    <h5 class="my-3">${cityData.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    `
    // let timeSrc = null
    // if(weather.IsDayTime){
    //  timeSrc = 'images/day.svg'
    // }else{
    //     timeSrc = 'images/night.svg'
    // }

    // time.setAttribute('src',timeSrc)
    const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;

    if(weather.IsDayTime){
        time.src = `images/day.svg`
    }else{
        time.src = `images/night.svg`
    }

    icon.src = iconSrc;
  if(card.classList.contains('d-none')){
     card.classList.remove('d-none')
  };

}
// const updateCity = async (city)=>{
//         const cityData = await getCity(city)
//         const weather = await getWeather(cityData.Key)
//         return {cityData,weather};
// }

cityForm.addEventListener('submit', e =>{
    e.preventDefault();
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update city
    weather.updateCity(city)
    .then(response => updateUi(response))
    .catch(err => console.log(err));

    localStorage.setItem('city',city)
  
})

if(localStorage.getItem('city')){
  weather.updateCity(localStorage.getItem('city'))
  .then(response => updateUi(response))
  .catch(err => console.log(err))
}