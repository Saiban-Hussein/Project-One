const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchBar = document.querySelector("#search")
let users = [];
searchInput.value = null;
fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => {

  users = data.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]")
    // const body   = card.querySelector("[data-body]")
    const flag   = card.querySelector("#flag-container img").src = user.flags.png;
    // const form   =card.querySelector("#form");
    const button = card.querySelector("#button");
    

    // form.addEventListener('submit', function(event){
    // event.preventDefault()
    
    // const file =user.flags.png.files[0];
     
    // });

      header.textContent = user.name.common
        