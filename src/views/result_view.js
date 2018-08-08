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

ResultView.prototype.render = function (country) {
  const nameParagraph = document.createElement('p');
  nameParagraph.textContent = `${country.name}`;
  this.container.innerHTML = '';
  this.container.appendChild(nameParagraph);
  console.log(country);
};



module.exports = ResultView;
