const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

// calling the getPokemon function as per given number
const fetchPokemons = async() => {
    // a for loop that iterates untill we reach the pokemonCount
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
    }
};

// fetching the pokemon data from the api
const getPokemon = async(id) => {
    // api url to fetch the data
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // fetching the data from the api
    const res = await fetch(url);
    // converting the data into json format
    const data = await res.json();
    // calling the createPokemonCard function to create the card
    createPokemonCard(data);
};

// creating the pokemon card
const createPokemonCard = (pokemon) => {
    // creating the div element
    const pokemonEl = document.createElement('div');
    // adding the class to the div element
    pokemonEl.classList.add('pokemon');

    // we made the first letter of name to uppercase and then concatinated with the rest of the name(by excluding the first letter)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // we first convert it to string and then added zeroes to the left of the id
    const id = pokemon.id.toString().padStart(3, '0');
    // we loop through the array and create a new arrray of types
    const pokeTypes = pokemon.types.map((type) => type.type.name);
    const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;


    pokemonEl.innerHTML = pokemonInnerHTML;
    // appending the pokemonEl to the pokeContainer
    pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();