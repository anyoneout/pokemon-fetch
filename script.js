let fetchButton  = document.getElementById("fetchButton");
let codeInput = document.getElementById("pokeCode");
let divOutput = document.getElementById("pokeOutput");

async function handleFetch() {
  console.log("hello world");
  let pokeCode = codeInput.value;
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeCode}`);
  let data = await response.json();
  console.log(data);

  let pokeName = data.name;
  let pokeId = data.id;
  let pokeType = data.types;
  let pokeSprite = data.sprites.front_default;
  console.log(pokeName);
  console.log(pokeId);
  console.log(pokeType);
  console.log(pokeSprite);
  divOutput.innerHTML = `
     <div class="card">
     <img class="card-img-top" src ="${pokeSprite}"> 
      <div class="card-body">
        <h3 class="card-title">Name: ${pokeName}</h3>
        <p class="card-text">ID: ${pokeId}</p>
      </div>
    </div> 
  `;
}

fetchButton.addEventListener("click", handleFetch);
