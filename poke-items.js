console.log("hello from poke-items.js");

let userInput = document.getElementById("pokeInput");
let itemLangs = document.getElementById("itemLangs");

async function fetchPoke() {
  let pokeCode = userInput.value;
  let url = `https://pokeapi.co/api/v2/item/${pokeCode}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let html = "";
  let names = data.names;
  for (let i = 0; i < names.length; i++) {
    let interName = names[i];
    html += `<li>${interName.name}</li>`;
  }
  console.log(html);
  itemLangs.innerHTML = html;
}

fetchButton.addEventListener("click", fetchPoke);