import { City, Community } from './city.js'
const control = new Community;

/**
 * @description javascript Events / DOM
 * @name cityDomFunc
 */

let strMsg = '';
const newCityField = document.getElementById('id-msg');
const cityHistory = document.getElementById('id-comm-history');
const cityTitleNum = document.getElementsByClassName('cityNumSpan');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("closeModal")[0];

const cityDomFunc = {

  checkCityNameUserInput(name) {
    if (name === '') {
      cityDomFunc.showStrErrorMsg();
      return 'ERROR';
    }
    if (name != '') {
      name = name.toUpperCase();
      name = control.isNewCity(name);
      if (name === 'ERROR') {
        cityDomFunc.showStrErrorMsg();
        return 'ERROR';
      } else {
        cityDomFunc.deleteStrErrorMsg();
        return name;
      }
    }
  },

  checkNumUserInput: (num) => {
    if (num === '') {
      cityDomFunc.showStrErrorMsg();
      return 'ERROR';
    }
    if (num != '') {
      num = control.isAcoordinate(num);
      if (num === 'ERROR') {
        cityDomFunc.showStrErrorMsg()
        return 'ERROR';
      } else {
        cityDomFunc.deleteStrErrorMsg();
        return num;
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

  async addCityToDatabase(name, lat, long, pop) {
    //create a city and added to the db
    let data = await control.createCity(name, lat, long, pop);
    if (data.status === 200) {
      cityDomFunc.addCommunityToDom();
    }
  },

  async addCommunityToDom() {
    cityDomFunc.clearTheDom();
    let data = await control.getCommunity();
    if (data != 'SERVER ERROR') {

      //get data from db and added to the dom
      for (let city of data) {
        let myCity = new City(city.name, city.latitude, city.longitude, city.population, { key: city.key });
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
        let cityData = document.createElement('li');

        // create spans for each city
        let addedCityName = document.createElement('span');
        addedCityName.className = city.name + 'name';
        addedCityName.textContent = city.name;

        let addedCityPop = document.createElement('span');
        addedCityPop.textContent = 'Population: ' + city.population + ',';

        let addedCityLat = document.createElement('span');
        addedCityLat.textContent = 'Lat: ' + city.latitude + ',';

        let addedCityLong = document.createElement('span');
        addedCityLong.textContent = 'Long: ' + city.longitude + ',';

        let howBig = document.createElement('span');
        howBig.textContent = 'is a ' + myCity.howBig();

        let semiSphere = document.createElement('span');
        semiSphere.textContent = 'in The ' + control.whichSphere(city.name);

        // insert sapns into the list item
        cityItem.insertBefore(addedCityPop, cityItem.lastChild);
        cityItem.insertBefore(addedCityName, cityItem.lastChild);
        cityItem.insertBefore(addedCityLat, cityItem.lastChild);
        cityItem.insertBefore(addedCityLong, cityItem.lastChild);
        cityData.appendChild(howBig);
        cityData.appendChild(semiSphere);
        cityItem.appendChild(cityData);

        // append item to the list
        cityCardName.appendChild(cityList);
        cityList.insertBefore(cityItem, cityList.lastChild);

        // append edit button to each item
        let edit = document.createElement('span');
        let editTxt = document.createTextNode('\u270E');
        edit.className = 'id-edit';
        edit.appendChild(editTxt);
        cityCardName.appendChild(edit);

        // append close button to each item
        let close = document.createElement('span');
        let txt = document.createTextNode('\u2716');
        close.className = 'id-close';
        close.appendChild(txt);
        cityCardName.appendChild(close);

        //update city numbers and comm info
        cityDomFunc.setCityTitleNums();
        cityDomFunc.showCommunitySummary();

      } return 'SERVER ERROR'
    }
  },

  setCityTitleNums: () => {
    if (cityTitleNum.length > 0) {
      for (let i = cityTitleNum.length - 1; i >= 0; i--) {
        cityTitleNum[i].textContent = i + 1;
      }
    }
  },

  async showCommunitySummary() {
    if (cityTitleNum.length >= 1) {
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

  clearTheDom: () => {
    let clearItems = document.getElementsByClassName('id-close');
    for (let i = clearItems.length - 1; i >= 0; i--) {
      clearItems[i].parentElement.remove();
    }
  },

  // Click on a close button
  closeButton: window.addEventListener('click', async (e) => {
    if (e.target.className === 'id-close') {
      if (cityTitleNum.length > 0) {
        let removeItems = document.getElementsByClassName(e.target.parentElement.className);
        for (let i = removeItems.length - 1; i >= 0; i--) {
          removeItems[i].remove();
        }
        let deleteCityName = e.target.parentElement.className.slice(0, -14);
        await control.deleteCity(deleteCityName);
        cityDomFunc.deleteStrErrorMsg();
        cityDomFunc.setCityTitleNums();
        cityDomFunc.showCommunitySummary();
        cityDomFunc.addCommunityToDom();
      }
    }
  }),

  // edit population button
  clickOnEditPopButton: window.addEventListener('click', (e) => {
    if (e.target.className === 'id-edit') {
      modal.style.display = "block";
      cityDomFunc.addCityToModal(e.target.parentElement.className);
    }
  }),

  // show popup modal
  displayModal: window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  },

  // close modal button
  hideModal: span.onclick = function () {
    modal.style.display = "none";
  },

  // display city name to be updated on the modal
  addCityToModal: function addModalName(name) {
    let modelName = document.createElement('span');
    modelName.textContent = name.slice(0, -14);
    document.getElementById('span-title').textContent = name.slice(0, -14);
  },

  // update population
  updatePopulation: (num, name, type) => {
    if (cityTitleNum.length > 0) {
      if (type === 'Move In') {
        control.log('moveIn');
      } else if (type === 'Move Out') {
        control.log('moveOut');
      }
    }
  },
};

export default cityDomFunc;