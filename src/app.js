const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#countries');
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();

  const infoDiv = document.querySelector('div#country')
  const countryInfoDisplay = new ResultView(infoDiv);
  countryInfoDisplay.bindEvents();

});
