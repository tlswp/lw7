'use strict';
import './style.css';
import './lodash.js';

window.onload = function() {

  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function removeElement(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
    elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.splice(elementPosition, 1);
    }
  }

  function clearAll() {
    listingElements = [];
    storeElements = [];
  }

  function addToListingElements() {
    var listingElement = window.prompt('add to ListingElements');
    listingElements.push(listingElement);
  }

  function sortStore() {
    storeElements.sort();
  }


  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    var listingSelectString = '<select size="10" class="listing-select">' +
      '<% listingItems.forEach(function(item) { %>' +
      '<option><%-item%></option>' +
      '<% }); %>' +
      '</select>';
    var storeSelectString = '<select size="10" class="store-select">' +
      '<% storeItems.forEach(function(item) { %>' +
      '<option><%-item%></option>' +
      '<% }); %>' +
      '</select>';

    var storeSelectHTML = _.template(storeSelectString)({
      storeItems: storeElements
    });

    var listingSelectHTML = _.template(listingSelectString)({
      listingItems: listingElements
    });

    storeSelect.innerHTML = storeSelectHTML;
    listingSelect.innerHTML = listingSelectHTML;
  }
  updateUI();
  var addButton = document.querySelector('#add-button'),
    clearAllButton = document.querySelector('.clear-all'),
    addToListingButton = document.querySelector('.add-listing-button'),
    sortStoreButton = document.querySelector('.sort-store'),
    removeElementButton = document.querySelector('.remove-element');

  addButton.onclick = function() {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };
  removeElementButton.onclick = function() {
    var selectedOption = document.querySelector('.app option:checked');
    removeElement(selectedOption.innerText);
    updateUI();
  };
  clearAllButton.onclick = function() {
    clearAll();
    updateUI();
  };
  addToListingButton.onclick = function() {
    addToListingElements();
    updateUI();
  };
  sortStoreButton.onclick = function() {
    sortStore();
    updateUI();
  };
};