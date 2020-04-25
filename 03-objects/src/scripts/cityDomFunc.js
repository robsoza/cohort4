import { City, Community } from './city.js'
const control = new Community;

/**
 * @description javascript Events / DOM
 * @name cityDomFunc
 */
const newCityField = document.getElementById('id-msg');
let strMsg = '';
let ii = 0;
const cityHistory = document.getElementById('id-comm-history');

const cityDomFunc = {

  async checkCityNameUserInput(name) {
    if (name === '') {
      cityDomFunc.showStrErrorMsg();
      return 'ERROR';
    }
    if (name != '') {
      name = await control.isNewCity(name);
      name = name.toUpperCase();
      if (name === 'ERROR') {
        cityDomFunc.showStrErrorMsg();
        return 'ERROR';
      } else {
        cityDomFunc.deleteStrErrorMsg();
        return name;
      }
    }
  },

  showStrErrorMsg: () => {
    cityDomFunc.deleteStrErrorMsg();
    strMsg = document.createElement('P');
    strMsg.innerText = 'Please check info';
    strMsg.style.color = 'red';
    newCityField.appendChild(strMsg);
  },

  deleteStrErrorMsg: () => {
    if (strMsg) {
      strMsg.remove();
    }
  },

  async addCityToDom(name, lat, long, pop) {
    //create a city and added to the db
   let data2 = await control.createCity(name, lat, long, pop);
   if (data2.status === 200) {
    let data = await control.getCommunity();
    ii++;
    //get data from db and added to the dom
    for (let city of data) {
      // append new acc to history list
      let cityCardName = document.createElement('p');
      cityCardName.className = city.name + 'myAppend id-cp';
      cityCardName.style.backgroundColor = 'lightgray';
      cityCardName.textContent = 'City #';
      let cityNumSpan = document.createElement('span');
      cityNumSpan.className = 'cityNumSpan';
      cityCardName.appendChild(cityNumSpan);

      // cityHistory.appendChild(cityCardName);
      cityHistory.insertBefore(cityCardName, cityHistory.firstChild);

      let cityList = document.createElement('ol');
      let cityItem = document.createElement('li');

      // create spans for each city
      let addedCityName = document.createElement('span');
      addedCityName.className = city.name + 'name';
      addedCityName.textContent = city.name;

      let addedCityPop = document.createElement('span');
      addedCityPop.textContent = ' Population: ' + city.population;

      let addedCityLat = document.createElement('span');
      addedCityLat.textContent = ' Lat: ' + city.latitude;

      let addedCityLong = document.createElement('span');
      addedCityLong.textContent = ' Long: ' + city.longitude;

      // insert sapns into the list item
      cityItem.insertBefore(addedCityPop, cityItem.lastChild);
      cityItem.insertBefore(addedCityName, cityItem.lastChild);
      cityItem.insertBefore(addedCityLat, cityItem.lastChild);
      cityItem.insertBefore(addedCityLong, cityItem.lastChild);
      // append item to the list
      cityCardName.appendChild(cityList);
      cityList.insertBefore(cityItem, cityList.lastChild);

      // append close button to each item
      let span = document.createElement('span');
      let txt = document.createTextNode('\u00D7');
      span.className = 'id-close';
      span.appendChild(txt);
      cityCardName.appendChild(span);
      //update city numbers and comm info
      cityDomFunc.setCityTitleNums();
      cityDomFunc.showCommunity();
    }
   }
    
  },

  setCityTitleNums: () => {
    let cityTitleNum = document.getElementsByClassName('cityNumSpan');
    for (let i = cityTitleNum.length - 1; i >= 0; i--) {
      cityTitleNum[i].textContent = i + 1;

    }
  },

  async showCommunity() {
    if (ii >= 1) {
      document.getElementById('population-total').textContent = await control.getPopulation();
      document.getElementById('northern-city').textContent = await control.getMostNorthern();
      document.getElementById('southern-city').textContent = await control.getMostSouther();
    } else {
      document.getElementById('population-total').textContent = '';
      document.getElementById('northern-city').textContent = '';
      document.getElementById('southern-city').textContent = '';
    }
  },

  resetUserInputs: () => {
    document.getElementById('id-city-name-input').value = '';
    document.getElementById('id-pop-input').value = '';
    document.getElementById('id-lat-input').value = '';
    document.getElementById('id-long-input').value = '';
  },

};

export default cityDomFunc;

// Click on a close button
window.addEventListener('click', async (e) => {
  if (e.target.className === 'id-close') {
    if (ii > 0) { ii--; }
    let removeItems = document.getElementsByClassName(e.target.parentElement.className);
    for (let i = removeItems.length - 1; i >= 0; i--) {
      removeItems[i].remove();
    }
    let deleteCityName = e.target.parentElement.className.slice(0, -14);
   await control.deleteCity(deleteCityName);
    cityDomFunc.setCityTitleNums();
    cityDomFunc.showCommunity();
    cityDomFunc.deleteStrErrorMsg();
  }
});