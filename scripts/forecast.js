class Forecast{
    constructor(){
        this.key =  '0kfONTkn7EEEuoyDCUN3QLOGEimqj7lt';
        this.weatherUi = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUi = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityData = await this.getCity(city)
        const weather = await this.getWeather(cityData.Key)
        console.log(cityData)
        return {cityData,weather};
        
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityUi + query);
        const data = await response.json();
          return data[0];
    
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch( this.weatherUi + query);
        const data = await response.json()
        return data [0];
    }
}




const key = '0kfONTkn7EEEuoyDCUN3QLOGEimqj7lt';

// const getCity = async (city) =>{
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`

//     const response = await fetch(base + query);
//     const data = await response.json();
//       return data[0];


// }
// const getWeather = async (id)=>{
//      const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
//      const query = `${id}?apikey=${key}`;
//      const response = await fetch( base + query);
//      const data = await response.json()
//      return data [0];
// }
