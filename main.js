const pokemonContainer = document.querySelector('.pokemon-container')//pegando a div que ira conter tudo
const button = document.getElementById('button')
const input = document.getElementById('input')

function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => {
    createPokemon(data);
  })
}

function fetchPokemons(number){
  for(let i = 1; i <= number; i++){
    fetchPokemon(i)
  }
}

function createPokemon(pokemon){
  
  button.addEventListener('click', (e) => {

  e.preventDefault();
  const card = document.createElement('div');

  function elementos(){
    const types = pokemon.types.map(informacaoType => informacaoType.type.name)
    card.classList.add`${types[0]}`;
  }
  
  function cards(){
    card.classList.add('pokemon-block');
    card.id = `${pokemon.name}`

    if(input.value == card.id){
      card.style.display = "block"
      input.value = ""
    }
    pokemonContainer.appendChild(card)
  }
 
  function image(){
  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container')

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default
  
  spriteContainer.appendChild(sprite)
  card.appendChild(spriteContainer)
  }

  function numero(){
    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    card.appendChild(number)
  }

  function nome(){
    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = pokemon.name
    card.appendChild(name)
    
  }


  cards()
  elementos()
  image()
  numero()
  nome()
  })
  

}
fetchPokemons(151)








// const pokemonContainer = document.querySelector('.pokemon-container')//pegando a div que ira conter tudo

// function fetchPokemon(id){
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//   .then(res => res.json())
//   .then(data => {
//     createPokemon(data);
//   })
// }

// function fetchPokemons(number){
//   for(let i = 1; i <= number; i++){
//     fetchPokemon(i)
//   }
// }


// function createPokemon(pokemon){

//   const button = document.getElementById('button')
  
//   button.addEventListener('click', (e) => {

//   e.preventDefault();
  
//   const types = pokemon.types.map(informacaoType => informacaoType.type.name)
//   const card = document.createElement('div');

//   card.classList.add('pokemon-block');
//   card.classList.add`${types[0]}`;
//   card.id = `${pokemon.name}`

//   const input = document.getElementById('input')
//   if(input.value == card.id){
//     card.style.display = "block"
//   }
 
//   const spriteContainer = document.createElement('div');
//   spriteContainer.classList.add('img-container')

//   const sprite = document.createElement('img');
//   sprite.src = pokemon.sprites.front_default
  
//   spriteContainer.appendChild(sprite)

//   const number = document.createElement('p')

//   number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;//serve para passar pro id ter 3 numeros 0

//   const name = document.createElement('p')
//   name.classList.add('name')
//   name.textContent = pokemon.name
 

//   card.appendChild(spriteContainer)
//   card.appendChild(number)
//   card.appendChild(name)

//   pokemonContainer.appendChild(card)
  
//   })

// }

// fetchPokemons(151)
