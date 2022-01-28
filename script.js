function Weather(city, localWeather) {
  this.city = city;
  this.temp_c = localWeather.temp_c;
  this.condition = localWeather.condition;
}

Weather.prototype.removeClouds = function () {
  this.condition = "sun";
};

const kyivWeather = new Weather("Kiev", { temp_c: 12, condition: "clouds" });

const Lviv = new Weather("Lviv", { temp_c: 7, condition: "rain" });

document.body.innerHTML = kyivWeather.temp_c; // выведет в консоль температуру

console.log(`Температура в ${kyivWeather.city} - ${kyivWeather.temp_c}`);

kyivWeather.removeClouds();

console.log(kyivWeather.condition); // выведет в консоль sun
