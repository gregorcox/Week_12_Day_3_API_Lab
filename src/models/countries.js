const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function () {
  this.text = null;
}

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    PubSub.publish('Countries:countries-loaded', this.text);

  });
};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedCountry = evt.detail;
    this.findCountryByIndex(selectedCountry);
  })

};

Countries.prototype.findCountryByIndex = function (name) {
  for (country of this.text){
    if (country.name == name) {
      PubSub.publish('Countries:found-country', country)
    }
  }
};



module.exports = Countries;
