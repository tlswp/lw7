import "./style.css";
'use strict';
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
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';
    var newOption, i;

    for (i = 0; i < listingElements.length; i++) {
      newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (i = 0; i < storeElements.length; i++) {
      newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

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