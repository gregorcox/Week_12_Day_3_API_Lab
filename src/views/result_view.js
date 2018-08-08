const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:found-country', (evt) => {
    const country = evt.detail;
    this.render(country);
  })

};

ResultView.prototype.customElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

ResultView.prototype.createList = function (languages) {
  const list = document.createElement('ul');

  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  })

  return list;
};

ResultView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = this.customElement('h1', country.name);
  this.container.appendChild(countryName);

  const countryFlag = document.createElement('img');
  countryFlag.setAttribute('src', country.flag);
  this.container.appendChild(countryFlag);

  const regionTitle = this.customElement('h2', "Region:");
  this.container.appendChild(regionTitle);

  const countryRegion = this.customElement('p', country.region);
  this.container.appendChild(countryRegion);

  const languageTitle = this.customElement('h2', "Langauges:");
  this.container.appendChild(languageTitle);

  const languageList = this.createList(country.languages);
  this.container.appendChild(languageList);





};



module.exports = ResultView;
