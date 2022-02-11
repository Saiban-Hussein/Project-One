const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchBar = document.querySelector("#search")
let users = [];
searchInput.value = null;
fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => {
  